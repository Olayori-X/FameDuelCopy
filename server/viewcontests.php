<?php

require 'vendor/autoload.php';

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;
use Ratchet\Server\IoServer;
use Ratchet\WebSocket\WsServer;
use Ratchet\Http\HttpServer;

//  if($_SERVER['REQUEST_METHOD'] === 'POST'){
    include 'connect.php';
	include "validate.php";

    $data = file_get_contents("php://input");
    $values = json_decode($data, true);

    $user = validate($values['userid']);


    //  ORDER BY id DESC
    $getcontests = "SELECT * FROM othercontests WHERE accepted = true ORDER BY id DESC";
    $getcontestsquery = mysqli_query($connect, $getcontests);

    if($getcontestsquery){
        $contestslist = [];
        while($row = mysqli_fetch_assoc($getcontestsquery)){
            unset($row['id']);
            $contestslist[] = $row;
        }
    }

    $countvotes = [];
    $contestantsusernames = [];
    $userlikescounts = [];

    for($i=0; $i < count($contestslist); $i++){
        $challengername = $contestslist[$i]['challengername'];
        $inviteename = $contestslist[$i]['inviteename'];
        $contestids = $contestslist[$i]['contestid'];

        if($contestslist[$i]['privacy'] !== 'Public'){
            $followingcontestants = "SELECT * FROM followuser WHERE followeduser = '$challengername' OR '$inviteename' AND userfollowing = 'user'";
            $followingcontestantsquery = mysqli_query($connect, $followingcontestants);

            if (!$followingcontestantsquery) {
                die("Error in SQL query: " . mysqli_error($connect));
            }

            if($followingcontestantsquery){
                if(mysqli_num_rows($followingcontestantsquery) <= 0){
                    unset($contestslist[$i]);
                    print_r($contestslist);
                    continue;
                }
            }
        }

        echo "<br>";
        echo "STOP";

        //get vote count
        $getchallengervotes = "SELECT COUNT(contestants) as countone FROM $contestids WHERE contestants = '$challengername'";
        $getinviteevotes = "SELECT COUNT(contestants) as counttwo FROM $contestids WHERE contestants = '$inviteename'";

        $getchallengervotesquery = mysqli_query($connect, $getchallengervotes);
        $getinviteevotesquery = mysqli_query($connect, $getinviteevotes);

        if($getchallengervotesquery){
            $row = mysqli_fetch_assoc($getchallengervotesquery);
            $countone = $row['countone'];
        }

        if($getinviteevotesquery){
            $row = mysqli_fetch_assoc($getinviteevotesquery);
            $counttwo = $row['counttwo'];
        }

         $counts = [
            'challengervotes' => $countone,
            'inviteevotes' => $counttwo
         ];
         //get vote count ends here

         $countvotes[] = $counts;

         //get usernames of contestants of each contests
         $getchallengerusername = "SELECT * FROM users WHERE userid = '$challengername'";
         $getinviteeusername =  "SELECT * FROM users WHERE userid = '$inviteename'";

         $getchallengerusernamequery = mysqli_query($connect, $getchallengerusername);
         $getinviteeusernamequery = mysqli_query($connect, $getinviteeusername);

         if($getchallengerusernamequery){
            $row = mysqli_fetch_assoc($getchallengerusernamequery);
            unset($row['Password']);
            unset($row['id']);
            $challengerusername = [];
            $challengerusername[] = $row;
         }

         if($getinviteeusernamequery){
            $row = mysqli_fetch_assoc($getinviteeusernamequery);
            unset($row['Password']);
            unset($row['id']);
            $inviteeusername = [];
            $inviteeusername[] = $row;
         }

         $usernames = [
            'challengerusername' => $challengerusername,
            'inviteeusername' => $inviteeusername
         ];
         //get contestants usernames ends here

         $contestantsusernames[] = $usernames;

         //get contest likes start here
         $userlikescount = "SELECT COUNT(userliking) as userliking FROM likedcontests WHERE contestid = '$contestids'";
         $userlikescountquery = mysqli_query($connect, $userlikescount); //number of people that liked a contest

         //count variables start here
        if($userlikescountquery){
            if(mysqli_num_rows($userlikescountquery) > 0){
                $row = mysqli_fetch_assoc($userlikescountquery);
                $userlikescounts[] = $row['userliking']; //number of people that liked a contest
            }
        }
    }
    
    $dataneeded = [
        'contestlists' => $contestslist,
        'votecount' => $countvotes,
        'contestlikes' => $userlikescounts,
        'contestants_usernames' => $contestantsusernames
    ];

    // header('Content-Type: application/json');
    // echo json_encode($data);
    
    class Chat implements MessageComponentInterface{
        protected $clients;
        protected $dataneeded;
        protected static $latestData;

        public function __construct($dataneeded)
        {
            $this->clients = new \SplObjectStorage;
            $this->dataneeded = $dataneeded;
            self::$latestData = $dataneeded;
        }

        public function onOpen(ConnectionInterface $conn)
        {
            // Store the new connection to send messages to later
            $this->clients->attach($conn);

            // echo "New connection! ({$conn->resourceId})\n";
            $message = [
                'message' => 'message',
                'mess' => 'mess'
            ];
            // $conn->send(json_encode($this->dataneeded));
            $conn->send(json_encode(self::$latestData));
            $conn->send(json_encode($message));
        }

        public function onMessage(ConnectionInterface $from, $msg)
        {
            // Broadcast the message to all other clients
            foreach ($this->clients as $client) {
                if ($from !== $client) {
                    $client->send($msg);
                }
            }
        }

        public function onClose(ConnectionInterface $conn)
        {
            // Remove the connection when it's closed
            $this->clients->detach($conn);

            // echo "Connection {$conn->resourceId} has disconnected\n";
        }

        public function onError(ConnectionInterface $conn, \Exception $e)
        {
            echo "An error occurred: {$e->getMessage()}\n";

            $conn->close();
        }
    }

    $chat = new Chat($dataneeded);
// Run the WebSocket server
    $server = IoServer::factory(
        new HttpServer(
            new WsServer(
                // new Chat($dataneeded)
                $chat
            )
        ),
        8080 // Port to listen on
    );

    echo "WebSocket server started on port 8080\n";

    $server->run();

//  }