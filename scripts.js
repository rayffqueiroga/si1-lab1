var addDisciplina = function(nome) {
	var element = 
	"<div class='disciplina disciplina_aprender'>" + nome +
		"<input type='image' src='delete.png' id='remove'></input>" +
		"<input type='image' src='swap.png' id='swap'></input>" +
	"</div><div style='clear: both'></div>";
	$("#aprender").after(element);
}
$(document).ready(function(){
	var showAprender = true;
	var showAprendidas = true;
	$("#campo").keyup(function(e){
		if(e.keyCode == 13) {
			var nome_disciplina = $("#campo").val();
			addDisciplina(nome_disciplina);
			$("#campo").val('');
		}
	});
	$("#adicionar").click(function(){
		var nome_disciplina = $("#campo").val();
		addDisciplina(nome_disciplina);
	});
	$("#aprender").click(function(){
		if (showAprender) { 
			$(".disciplina_aprender").fadeOut("fast");
		} else {
			$(".disciplina_aprender").fadeIn("fast");
		}
		showAprender = !showAprender;
	});
	$("#aprendidas").click(function(){
		if (showAprendidas) { 
			$(".disciplina_aprendida").fadeOut("fast");
		} else {
			$(".disciplina_aprendida").fadeIn("fast");
		}
		showAprendidas = !showAprendidas;
	});
	$(document).on("click", "#remove", function(){
		$(this).parent().fadeOut("fast", function(){
			$(this).remove();
		});
	});
	$(document).on("click", "#swap", function(){
		$("#aprendidas").after($(this).parent());
		$("#aprendidas").after("<div style='clear: both;'></div>");
		$(this).parent().removeClass("disciplina_aprender");
		if (!showAprendidas) {
			$(this).parent().fadeOut("fast");
		}
		$(this).parent().addClass("disciplina_aprendida");
		$(this).remove();
	});
	$(document).on("mouseenter", ".disciplina", function(){
		$(this).css("background-color", "#b7daf7");
	});
	$(document).on("mouseleave", ".disciplina", function(){
		$(this).css("background-color", "white");
	});
});