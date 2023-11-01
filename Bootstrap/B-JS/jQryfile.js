// JavaScript Document

/*$(function() { $( "#Dob" ).datepicker({changeMonth: true,changeYear: true, yearRange: '-70:+10'});
$.datepicker.setDefaults({dateFormat: 'yy-mm-dd'});
});	*/





function callAjax(work){
			//Ajax processing
			if(work=='newUser'){
				//alert("test eventss");
			var sNme = encodeURIComponent(document.getElementById("sNme").value);
			var fNme = encodeURIComponent(document.getElementById("fNme").value);
			var addrs = encodeURIComponent(document.getElementById("addrs").value);
			var phone = encodeURIComponent(document.getElementById("phone").value);
			var eMail = encodeURIComponent(document.getElementById("eMail").value);
			var Dob = encodeURIComponent(document.getElementById("Dob").value);
			var State = encodeURIComponent(document.getElementById("State").value);
			var lga = encodeURIComponent(document.getElementById("lga").value);
			var Dept1 = encodeURIComponent(document.getElementById("Dept1").value);
			var uPass = encodeURIComponent(document.getElementById("uPass").value);
			var uNme = encodeURIComponent(document.getElementById("uNme").value);
			var sex = encodeURIComponent(document.getElementById("sex").value);

			$('#ajaxDivNU').html('<img src="js/loading.gif" />');
			var param = "ProcessAJax=newAdm&sNme="+sNme+"&fNme="+fNme+"&addrs="+addrs+"&phone="+phone+"&eMail="+eMail+"&Dob="+Dob+"&State="+State+"&lga="+lga+"&uPass="+uPass+"&Dept1="+Dept1 +"&uNme="+uNme+"&sex="+sex;
			$.ajax({url:"workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$('#ajaxDivNU').html(''); $("#ajaxDivNU").html(html); }
			});
			} else if(work=='newProd'){
				//alert("test eventss");editUser
			var pBar = encodeURIComponent(document.getElementById("pBar").value);
			var pName = encodeURIComponent(document.getElementById("pName").value);
			var pDesc = encodeURIComponent(document.getElementById("pDesc").value);
			var pDesc2 = encodeURIComponent(document.getElementById("pDesc2").value);
			var pCat = encodeURIComponent(document.getElementById("pCat").value);
			var psCat = encodeURIComponent(document.getElementById("psCat").value);
			var pQty = encodeURIComponent(document.getElementById("pQty").value);
			var sku = encodeURIComponent(document.getElementById("sku").value);
			var price = encodeURIComponent(document.getElementById("price").value);
			var taxCost = encodeURIComponent(document.getElementById("taxCost").value);
			var shipCost = encodeURIComponent(document.getElementById("shipCost").value);
			var pLength = encodeURIComponent(document.getElementById("pLength").value);
			var pStatus = encodeURIComponent(document.getElementById("pStatus").value);
			var pColor = encodeURIComponent(document.getElementById("pColor").value);
			var oLength = encodeURIComponent(document.getElementById("oLength").value);
			var oPrice = encodeURIComponent(document.getElementById("oPrice").value);

			$('#ajaxDivNU').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=newProd&pBar="+pBar+"&pName="+pName+"&pDesc="+pDesc+"&pDesc2="+pDesc2+"&pCat="+pCat+"&psCat="+psCat+"&pQty="+pQty+"&sku="+sku+"&price="+price+"&taxCost="+taxCost +"&shipCost="+shipCost+"&pLength="+pLength+"&pStatus="+pStatus +"&pColor="+pColor +"&oLength="+oLength +"&oPrice="+oPrice;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$('#ajaxDivNU').html(''); $("#ajaxDivNU").html(html); }
			});
			} else if(work=='updProd'){
				//alert("test eventss");editUser
			var pBar = encodeURIComponent(document.getElementById("pBar").value);
			var pName = encodeURIComponent(document.getElementById("pName").value);
			var pDesc = encodeURIComponent(document.getElementById("pDesc").value);
			var pDesc2 = encodeURIComponent(document.getElementById("pDesc2").value);
			var pCat = encodeURIComponent(document.getElementById("pCat").value);
			var psCat = encodeURIComponent(document.getElementById("psCat").value);
			var pQty = encodeURIComponent(document.getElementById("pQty").value);
			var sku = encodeURIComponent(document.getElementById("sku").value);
			var price = encodeURIComponent(document.getElementById("price").value);
			var taxCost = encodeURIComponent(document.getElementById("taxCost").value);
			var shipCost = encodeURIComponent(document.getElementById("shipCost").value);
			var pLength = encodeURIComponent(document.getElementById("pLength").value);
			var pStatus = encodeURIComponent(document.getElementById("pStatus").value);
			var pColor = encodeURIComponent(document.getElementById("pColor").value);
			var psn = encodeURIComponent(document.getElementById("psn").value);
			var pro1 = encodeURIComponent(document.getElementById("pro1").value);
			var pro2 = encodeURIComponent(document.getElementById("pro2").value);
			var pro3 = encodeURIComponent(document.getElementById("pro3").value);
			var oLength = encodeURIComponent(document.getElementById("oLength").value);
			var oPrice = encodeURIComponent(document.getElementById("oPrice").value);

			$('#ajaxDivNU').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=updProd&pBar="+pBar+"&pName="+pName+"&pDesc="+pDesc+"&pDesc2="+pDesc2+"&pCat="+pCat+"&psCat="+psCat+"&pQty="+pQty+"&sku="+sku+"&price="+price+"&taxCost="+taxCost +"&shipCost="+shipCost+"&pLength="+pLength+"&pStatus="+pStatus +"&pColor="+pColor+"&psn="+psn+"&pro1="+pro1 +"&pro2="+pro2+"&pro3="+pro3+"&oLength="+oLength +"&oPrice="+oPrice;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$('#ajaxDivNU').html(''); $("#ajaxDivNU").html(html); }
			});
			}else if(work=='chkuser'){
			var userid = encodeURIComponent(document.getElementById("username").value);
			var passwd = encodeURIComponent(document.getElementById("password").value);

			$('#ajaxDiv').html('<img src="workfiles/loading.gif" />');
			var param = "ProcessAJax=chkuser&userid="+userid+"&passwd="+passwd;
			$.ajax({url:"workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$("#ajaxDiv").html(html); $('#ajaxDiv').html('');}
			});
			}else if(work=='addBnn'){
				//alert("test eventss");
			var pCat = encodeURIComponent(document.getElementById("pName").value);


			$('#ajaxDivNU').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=addBnn&pCat="+pCat;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$('#ajaxDivNU').html(''); $("#ajaxDivNU").html(html); }
			});
			}else if(work=='addCat'){
				//alert("test eventss");
			var pCat = encodeURIComponent(document.getElementById("pName").value);


			$('#ajaxDivNU').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=addCat&pCat="+pCat;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$('#ajaxDivNU').html(''); $("#ajaxDivNU").html(html); }
			});
			}else if(work=='updCat'){
				//alert("test eventss");
			var pCat = encodeURIComponent(document.getElementById("pName").value);
			var cid = encodeURIComponent(document.getElementById("cid").value);


			$('#ajaxDivNU').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=updCat&pCat="+pCat+"&cid="+cid;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$('#ajaxDivNU').html(''); $("#ajaxDivNU").html(html); }
			});
			}else if(work=='addSubCat'){
				//alert("test eventss");
			var pCat = encodeURIComponent(document.getElementById("pCat").value);
			var sNme = encodeURIComponent(document.getElementById("pName").value);

			$('#ajaxDivNU').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=addSubCat&pCat="+pCat+"&sNme="+sNme;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$('#ajaxDivNU').html(''); $("#ajaxDivNU").html(html); }
			});
			}else if(work=='updSubCat'){
				//alert("test eventss");
			var pCat = encodeURIComponent(document.getElementById("pCat").value);
			var sNme = encodeURIComponent(document.getElementById("pName").value);
			var sid = encodeURIComponent(document.getElementById("sid").value);
			$('#ajaxDivNU').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=updSubCat&pCat="+pCat+"&sNme="+sNme+"&sid="+sid;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$('#ajaxDivNU').html(''); $("#ajaxDivNU").html(html); }
			});
			}


		}


function callAdminPage(){
			//Ajax processing
			location.href='templates/admin/index.php';

		}
function callTryAgain(){
			//Ajax processing
			alert('Please try again aoon');

		}
function callAjaxPages(plink,id){
			//Ajax processing
			//alert(id);
			$('#bodycontent').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=getpage&plink="+plink+"&id="+id;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

				$('#bodycontent').html('');	$("#bodycontent").html(html); }
			});


		}
function callAjaxDelete(plink,id){
			//Ajax processing
			//alert(id);
			$('#bodycontent').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=Ajaxdelete&plink="+plink+"&id="+id;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

				$('#bodycontent').html('');	$("#bodycontent").html(html); }
			});


		}

function callAjaxState(){
			//Ajax processing
			var cName = encodeURIComponent(document.getElementById("State").value);

			$('#ajaxDivNU').html('<img src="js/loading.gif" />');
			var param = "ProcessAJax=getofixsel2&cName="+cName;
			$.ajax({url:"workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					$("#lgaDiv").html(html); $('#ajaxDivNU').html('');}
			});


		}
function callAjaxState2(){
			//alert('testing testing');
			var pCat = encodeURIComponent(document.getElementById("pCat").value);

			$('#subcatDrop').html('<img src="../../workfiles/loading.gif" />');
			var param = "ProcessAJax=getofixsel2&cName="+pCat;
			$.ajax({url:"../../workfiles/ajaxme.php",data: param, cache: false, success: function(html){

					 $('#subcatDrop').html(''); $("#subcatDrop").html(html);}
			});


		}

function callAjaxClear1(){
			//Ajax processing
			//document.getElementById("State").value = "";
			document.getElementById("pName").value = "";



		}
////////////////////////////cart
function recalculat(){
				alert("am recaculating");
				var qty = parseInt($('#pqty').val());
				if(qty <=0){qty = 1;}
				var prc = parseFloat($('#uCost').val());
				var t = (prc * qty).toFixed(2);
				//alert("total : "+t);
				$('#totalDiv').html('$'+t);
				//var rt;
				//$.post('includes.file/chk-update.php?ProcessAJax=convertAmt&amt='+t, function(data) { $('#totalDiv').html(data); });

		}
function unitByLength(){

				var size = $('#size').val(); var Llist = $('#Llist').val().split(","); var Lprice = $('#LpriceList').val().split(",");
				var indx = Llist.indexOf(size); var price = Lprice[indx];
				//alert(size+' - '+Llist+' - '+Lprice+' - '+indx+' - '+price);
				var price2 = parseFloat(price).toFixed(2);
				if(price <=0){alert("pls choose valid length");}else{
				$('#uCost').val(price); //$('#uRate').text('$'+price);
				$.post('includes.file/chk-update.php?ProcessAJax=convertAmt&amt='+price2, function(data) { $('#uRate').html(data); });
				$('#Length').val(size);
				recalculat();
				}

		}
function switchChkout(show){

				if(show ==1){
					$("#acctDiv").show();
					$("#loginDiv").hide();
				}else{
					$("#acctDiv").hide();
					$("#loginDiv").show();
				}

		}
function autocomplet2() {
	var min_length = 0; // min caracters to display the autocomplete
	var keyword = $('#search_box').val();
	if (keyword.length >= min_length) {
		$.ajax({
			url: 'includes/ajaxaction.php?Action=autoComplete2',
			type: 'POST',
			data: {keyword:keyword},
			success:function(data){
				$('#search_list').show();
				$('#search_list').html(data);
			}
		});
	} else {
		$('#search_list').hide();
	}
}
function autocomplet() {
	var min_length = 0; // min caracters to display the autocomplete
	var keyword = $('#search_box').val();
	if (keyword.length >= min_length) {
		$.ajax({
			url: '../includes/ajaxaction.php?Action=autoComplete',
			type: 'POST',
			data: {keyword:keyword},
			success:function(data){
				$('#search_list').show();
				$('#search_list').html(data);
			}
		});
	} else {
		$('#search_list').hide();
	}
}

function set_item(item) {
	// change input value
	$('#search_box').val(item);
	// hide proposition list
	$('#search_list').hide();
}

function showHide(show,hide) {
	if(hide == '1'){
		$('#'+show).show();
	}
	else{
		$('#'+show).hide();
	}
}

function getShopByCat(cat) {
	showAjax('','includes/ajaxaction.php?Action=searchShopByCat&cat='+cat,'viewContent');
}



////////////////////////end cart

/*function showAjax(formid, webpage,resultDiv){

	if(webpage==null || resultDiv == ''){alert('invalid parameters');}else{
		if(formid==null || formid ==''){
			$('#'+resultDiv).html('<img src="loading.gif" />');
			$.post(webpage, function(data) {
									$('#'+resultDiv).html(''); $('#'+resultDiv).html(data);
								});

			}else{
					$('#'+resultDiv).html('<img src="loading.gif" />');
					$.post(webpage, $("#"+formid).serialize(), function(data) {
									$('#'+resultDiv).html(''); $('#'+resultDiv).html(data);
								});
					}

	}
}*/
function showAjax(formid, webpage,resultDiv){

	if(webpage==null || resultDiv == ''){alert('invalid parameters');}else{
		if(formid==null || formid ==''){
			//$('.'+resultDiv).html('<img src="loading.gif" />');
			$.get(webpage, function(data) {
									$('#'+resultDiv).html(''); $('#'+resultDiv).html(data);
								}).fail(function(data,txtstatus,errorthrown) {
									$('#'+resultDiv).html('');
									$('#'+resultDiv).html(data.toString()+' '+txtstatus+' '+webpage+' '+errorthrown);
								});

			}else{
					//$('.'+resultDiv).html('<img src="loading.gif" />');
					$.post(webpage, $("#"+formid).serialize(), function(data) {
									$('#'+resultDiv).html(''); $('#'+resultDiv).html(data);
								}).fail(function(data,txtstatus,errorthrown) {
									$('#'+resultDiv).html('');
									$('#'+resultDiv).html(txtstatus+' '+webpage+' '+errorthrown);
								});
					}

	}
}
