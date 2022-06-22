//parametros para iniciar GeoGebra
//https://wiki.geogebra.org/en/Reference:GeoGebra_App_Parameters
let ggbParameters = {
  id: "ggb",
  prerelease: false,
  width: 900,
  height: 500,
  showToolBar: false,
  borderColor: null,
  showMenuBar: false,
  showAlgebraInput: false,
  showResetIcon: true,
  enableLabelDrags: false,
  enableShiftDragZoom: true,
  enableRightClick: false,
  capturingThreshold: null,
  showToolBarHelp: false,
  errorDialogsActive: true,
  useBrowserForJS: false,
  material_id: "kkty6k97",
  appletOnLoad: (api) =>
    ggbConstr
      .replaceAll("\n", "")
      .split(";")
      .forEach((x) => api.evalCommand(x)),
};

//Iniciar applicação GeoGebra
//https://wiki.geogebra.org/en/Reference:GeoGebra_Apps_Embedding
//só no setup() é que inicializa completamente

let applet = new GGBApplet(ggbParameters, true);

//when used with Math Apps Bundle, uncomment this:
//applet.setHTML5Codebase('GeoGebra/HTML5/5.0/webSimple/');

window.onload = function () {};

function evalInput(strInput) {
  ggb.evalCommand(strInput);
  return false;
}

