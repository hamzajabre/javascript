Notes = new Array([10,12,18,5,9,13,16,19],[13,11,14,7,14,16,12,10],[9,14,14,12,8,20,13,13]);
NomEleves = new Array("Dupont", "Durand", "Petit", "Martin", "Legrand", "Lacroix", "Legros", "Lenaim");


function Afficher(TabNom, TabNotes) {

	document.writeln("<BR> <H3> Affichage du tableau de notes </H3><BR>");
	for(var Ligne=0;Ligne<TabNom.length;Ligne++){
	
		document.writeln("<BR>" + TabNom[Ligne] + "&nbsp;&nbsp;&nbsp;");
		
			for(var j=0;j<TabNotes.length;j++){
				document.writeln(" - " + TabNotes[j][Ligne]);
			}
	}	
	
}

function AfficherHTML(TabNom, TabNotes) {

	document.writeln("<BR> <H3> Affichage du tableau de notes avec les balises HTML</H3><BR>");
	document.writeln("<TABLE Border ='1'>");
	
	for(var Ligne=0;Ligne<TabNom.length;Ligne++){
	
		document.writeln("<TR>");
		document.writeln("<TD>" + TabNom[Ligne] + "</TD>");
		
			for(var j=0;j<TabNotes.length;j++){
				document.writeln("<TD>" + TabNotes[j][Ligne] + "</TD>");
			}
			
			document.writeln("</TR>");
	}
	document.writeln("</TABLE>");	
	
}

function CalculMoyenneClasse(TabNotes) {

var Somme = 0, NbreNotes = 0;

	for(var Ligne=0;Ligne<TabNotes[0].length;Ligne++){
	
			for(var j=0;j<TabNotes.length;j++){
				NbreNotes++;
				Somme += TabNotes[j][Ligne];
			}
	}	
	
	return Somme/NbreNotes;
	
}

function CalculMoyenneEleve(TabNom,TabNotes) {

var Somme = 0, NbreNotes = 0;
     document.writeln("<TABLE Border ='1'>");
	 document.writeln("<TR><TH> Noms </TH><TH> Moyennes </TH></TR>");
	for(var Ligne=0;Ligne<TabNom.length;Ligne++){
	
		document.writeln("<TR>");
		document.writeln("<TD>" + TabNom[Ligne] + "</TD>");
		
		NbreNotes = 0;
		Somme = 0;
		
			for(var j=0;j<TabNotes.length;j++){
				NbreNotes++;
				Somme += TabNotes[j][Ligne];
			}
			document.writeln("<TD>" + Math.round((Somme/NbreNotes)*100)/100 + "</TD>");
			document.writeln("</TR>");
	}
	document.writeln("</TABLE>");	
	
	
}

function NoteMin(TabNotes) {

var Min;

	Min = TabNotes[0][0]; 
	
	for(var Ligne=0;Ligne<TabNotes[0].length;Ligne++){
	
			for(var j=0;j<TabNotes.length;j++){
				
				if(Min > TabNotes[j][Ligne]){
					Min = TabNotes[j][Ligne];
				
				}
			}
	}	
	
	return Min;
	
}

function NoteMax(TabNotes) {

var Max;

	Max = TabNotes[0][0]; 
	
	for(var Ligne=0;Ligne<TabNotes[0].length;Ligne++){
	
			for(var j=0;j<TabNotes.length;j++){
				
				if(Max < TabNotes[j][Ligne]){
					Max = TabNotes[j][Ligne];
				
				}
			}
	}	
	
	return Max;
	
}

