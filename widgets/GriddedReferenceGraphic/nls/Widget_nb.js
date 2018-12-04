// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GriddedReferenceGraphic/nls/strings":{_widgetLabel:"Grafisk rutenettreferanse",newGRGFromAreaButtonLabel:"Definer et rutenett ut fra et omr\u00e5de",newGRGFromPointButtonLabel:"Definer et rutenett ut fra et punkt",newGRGFromAreaTitle:"Definer et rutenett ut fra et omr\u00e5de",newGRGFromPointTitle:"Definer et rutenett ut fra et punkt",newGRGBySizeButtonLabel:"Etter dimensjon",newGRGFromRefSystemButtonLabel:"Etter referansesystem",newGRGByTimeLabel:"Etter tid og hastighet",newGRGFromNonStandardButtonLabel:"Definer ikke-standard rutenett",
newGRGAreaBySizeTitle:"GRG fra et omr\u00e5de etter dimensjon",newGRGAreaBySizeDefineAreaLabel:"GRG-omr\u00e5de",addGRGAreaPolygonToolTip:"Tegn GRG-omr\u00e5de ved hjelp av polygon",addGRGAreaExtentToolTip:"Tegn GRG-omr\u00e5de ved hjelp av utstrekning",rotation:"Rutenettrotasjon",numberRowsColumnsLabel:"Definer antall rader og kolonner",newGRGAreaByRefSystemTitle:"GRG fra et omr\u00e5de etter referansesystem",gridSize:"Rutenettst\u00f8rrelse",UTMZoneandBand:"Rutenettsone","100000m":"100000 meter",
"10000m":"10000 meter","1000m":"1000 meter","100m":"100 meter","10m":"10 meter",clipGrid:"Klipp rutenett til GRG-omr\u00e5de",newGRGAreaFromNonStandardTitle:"Ny NRG",newGRGPointBySizeTitle:"GRG fra punkt etter dimensjon",newGRGPointByRefSystemTitle:"GRG fra punkt etter referansesystem",newGRGPointByTimeTitle:"GRG fra punkt ved hjelp av tid og hastighet",time:"Tid",rate:"Hastighet",hours:"Timer",minutes:"Minutter",seconds:"Sekunder",ftPerSec:"Fot/sekund",ftPerHour:"Fot/time",kmPerSec:"Kilometer / sekund",
kmPerHour:"Kilometer / time",mPerSec:"Meter / sekund",mPerHour:"Meter / time",miPerSec:"Miles / sekund",miPerHour:"Miles / time",nMPerSec:"Nautiske mil / sekund",nMPerHour:"Nautiske mil / time",settingsTitle:"Innstillinger",labelSettingsLabel:"Etikettinnstillinger",labelSettingsButtonLabel:"Konfigurer etikettinnstillinger",gridSettingsLabel:"Rutenettinnstillinger",gridSettingsButtonLabel:"Konfigurer rutenettinnstillinger",transparency:"Gjennomsiktighet",labelStyle:"Etikettstil",font:"Skrifttype",
textSize:"Tekstst\u00f8rrelse",textColor:"Tekstfarge",halo:"Glorie",show:"Vis",lockSettings:"Innstillingene er l\u00e5st av programeieren",gridSettings:{cellShape:"Celleform",cellUnits:"Celleenheter",cellOutline:"Innstillinger for celleomriss",cellFill:"Innstillinger for cellefyll",gridReferenceSystem:"Referansesystem",gridDatum:"Datum: WGS84",labelStartPosition:"Etikettopprinnelse",labelType:"Etiketttype",labelDirection:"Etikettretning",gridOrigin:"Rutenettopprinnelse","default":"Rektangel",hexagon:"Heksagon",
miles:"Miles",kilometers:"Kilometer",feet:"Fot",meters:"Meter",yards:"Yard","nautical-miles":"Nautiske mil",lowerLeft:"Nedre-venstre",lowerRight:"Nedre-h\u00f8yre",upperLeft:"\u00d8vre-venstre",upperRight:"\u00d8vre-h\u00f8yre",center:"Senter",alphaNumeric:"Alfa-numerisk",alphaAlpha:"Alfa-alfa",numeric:"Numerisk",horizontal:"Vannrett",vertical:"Loddrett",MGRS:"MGRS",USNG:"USNG",showLabels:"Vis etiketter"},publishTitle:"Publiser GRG til portal",publishGRGBtn:"Publiser",GRGLayerName:"Publisert GRG-lagnavn",
invalidGRGLayerName:"Lagnavn kan bare inneholde alfanumeriske tegn og understrekingstegn",missingGRGLayerName:"Du m\u00e5 oppgi et navn for GRG",publishWorskpaceError:"FEIL: Feil ved \u00e5pning av arbeidsomr\u00e5de",publishingFailedLayerExists:"Publiseringen mislyktes: Du har allerede en geoobjektstjeneste med navnet {0}. Velg et annet navn.",checkService:"Kontroller tjeneste: {0}",createService:"Opprett tjeneste {0}",unableToCreate:"Kan ikke opprette: {0}",addToDefinition:"Legg til definisjon: {0}",
successfullyPublished:"Vellykket publisering av weblag{0}Administrer weblaget",userRole:"Kan ikke opprette tjeneste fordi brukeren ikke har tillatelser",createGRGBtn:"Opprett GRG",clearGRGBtn:"T\u00f8m",labelFormat:"Etikettformat",helpIconTooltip:"Z: ID for rutenettsone (GZD)\nS: 100000 meter identifikasjon av rutenettsrute (GSID)\nX: Forandret \u00f8stlig lengde (X-koordinat)\nY: Forandret nordlig bredde (Y-koordinat)\n\nEksempel:\nZSXY er 15SWC8081751205\nZS X,Y er 15SWC 80817,51205",addPointToolTip:"Legg til GRG-opprinnelse",
cellWidth:"Cellebredde (x)",cellHeight:"Celleh\u00f8yde (y)",invalidNumberMessage:"Den angitte verdien er ugyldig",invalidRangeMessage:"Verdien m\u00e5 v\u00e6re st\u00f8rre enn 0",gridAngleInvalidRangeMessage:"Verdien m\u00e5 v\u00e6re mellom -89,9 og 89,9",formatIconTooltip:"Formater inndata",coordInputLabel:"GRG-opprinnelse (DD)",setCoordFormat:"Angi koordinatformatstreng",prefixNumbers:'Legg til prefikset "+/-" for positive og negative tall',cancelBtn:"Avbryt",applyBtn:"Bruk",comfirmInputNotation:"Bekreft inndatanotasjon",
notationsMatch:"notasjoner samsvarer med inndataene. Bekreft hvilke du vil bruke:",numberOfCellsHorizontal:"# vannrette celler",numberOfCellsVertical:"# loddrette celler",gridAngle:"Rutenettrotasjon",tooManyCellsErrorMessage:"Du pr\u00f8ver \u00e5 opprette et rutenett som best\u00e5r av over 2000 celler. Du b\u00f8r redusere antallet celler som opprettes, ved \u00e5 endre rutenettst\u00f8rrelsen eller rutenettomr\u00e5det.",missingParametersMessage:"\x3cp\x3eSkjemaet for \u00e5 opprette GRG har manglende eller ugyldige parametere. Kontroller at:\x3c/p\x3e\x3cul\x3e\x3cli\x3eDet er tegnet opp et GRG-omr\u00e5de.\x3c/li\x3e\x3cli\x3eDet er angitt gyldige verdier for cellebredde og celleh\u00f8yde.\x3c/li\x3e\x3c/ul\x3e",
missingOriginParametersMessage:"\x3cp\x3eSkjemaet for \u00e5 opprette GRG har manglende eller ugyldige parametere. Kontroller at:\x3c/p\x3e\x3cul\x3e\x3cli\x3eDet er angitt en GRG-opprinnelse.\x3c/li\x3e\x3cli\x3eDet er angitt gyldige verdier for tid, hastighet og vinkel.\x3c/li\x3e\x3c/ul\x3e",invalidWidthHeightParametersMessage:"\x3cp\x3eSkjemaet for \u00e5 opprette GRG har manglende eller ugyldige parametere. Kontroller at det er angitt gyldige verdier for cellebredde og celleh\u00f8yde.\x3c/p\x3e",
invalidHorizontalVerticalParametersMessage:"\x3cp\x3eSkjemaet for \u00e5 opprette GRG har manglende eller ugyldige parametere. Kontroller at det er angitt gyldige verdier for antall celler vannrett og loddrett.\x3c/p\x3e",drawPointToolTip:"Klikk for \u00e5 legge til GRG-opprinnelsespunkt",missingLayerNameMessage:"Du m\u00e5 angi et gyldig lagnavn f\u00f8r du kan publisere",parseCoordinatesError:"Kan ikke analysere koordinater. Sjekk inndataene.",grgPolarRegionError:"GRG-utstrekningen ligger innenfor et polaromr\u00e5de. Celler som havner innenfor polaromr\u00e5det, blir ikke opprettet.",
grgPolarOriginError:"GRG-opprinnelsespunktet kan ikke v\u00e6re i et polaromr\u00e5de n\u00e5r en GRG opprettes av referansesystemet.",deleteBtn:"Slett",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"Desimalgrader - Breddegrad/lengdegrad",DDLongLatNotation:"Desimalgrader - Lengdegrad/breddegrad",DDMLatLongNotation:"Grader og desimalminutter - Breddegrad/lengdegrad",DDMLongLatNotation:"Grader og desimalminutter - Lengdegrad/breddegrad",
DMSLatLongNotation:"Grader Minutter Sekunder - Breddegrad/lengdegrad",DMSLongLatNotation:"Grader Minutter Sekunder - Lengdegrad/breddegrad",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - B\u00e5ndbokstav",UTMHemNotation:"UTM - Halvkule (N/S)",_localized:{}}});