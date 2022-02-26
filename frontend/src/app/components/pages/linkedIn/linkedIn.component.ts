import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-linkedIn',
  templateUrl: './linkedIn.component.html',
  styleUrls: ['./linkedIn.component.css']
})
export class LinkedInComponent implements OnInit {

  constructor() { }

  inicio = false;
  nombre: string= "";

  jess = true;
  gui = false;


  ngOnInit(): void {
    this.jess = true;
    this.gui = false;
  }

  DescripcionGui= ''
  UbicacionGui = ''
  DireccionURLGui =''


  //------------------------------------Experience----------------------------------------

  Titulo1Gui = ''
  Company1Gui = ''
  EDescripcion1Gui= ''
  DR1Gui= ''
  D1Gui= ''
  L1Gui= ''
  Titulo2Gui= ''
  Company2Gui= ''
  EDescripcion2Gui= ''
  DR2Gui= ''
  D2Gui= ''
  L2Gui= ''
  Titulo3Gui= ''
  Company3Gui= ''
  EDescripcion3Gui= ''
  DR3Gui= ''
  D3Gui= ''
  L3Gui= ''
  Titulo4Gui= ''
  Company4Gui= ''
  EDescripcion4v= ''
  DR4Gui= ''
  D4Gui= ''
  L4Gui= ''
  Titulo5Gui= ''
  Company5Gui= ''
  EDescripcion5Gui= ''
  DR5Gui= ''
  D5Gui= ''
  L5Gui= ''

//------------------------------------Education----------------------------------------
  Titulo1EGui= ''
  Company1EGui= ''
  E1Gui= ''
  Titulo2EGui= ''
  Company2EGui= ''
  E2Gui= ''
  Titulo3EGui= ''
  Company3EGui= ''
  E3Gui= ''
//-------------------------------------Skills--------------------------------------
  SKGu1= ''
  SKGu2= ''
  SKGu3= ''
  SKGu4= ''
  SKGu5= ''
  SKGu6= ''
  SKGu7= ''
  SKGu8= ''
  SKGu9= ''
  SKGu10= ''
  SKGu11= ''
  SKGu12= ''
  SKGu13= ''
  SKGu14= ''
  SKGu15= ''
  SKGu16= ''
  SKGu17= ''
  SKGu18= ''
  SKGu19= ''
  SKGu20= ''
  SKGu21= ''
  SKGu22= ''
  SKGu23= ''

//-------------------------------------Recomendations Recived--------------------------------------
  RName1= ''
  RWork1= ''
  RText1= ''
  RData1= ''
  RName2= ''
  RWork2= ''
  RData2= ''
  RText2= ''
  RName3= ''
  RWork3= ''
  RText3= ''
  RData3= ''

//------------------------------------------------

  DescripcionJes= ''
  UbicacionJes= ''
  DireccionURLJes= ''

//------------------------------------Experience----------------------------------------
  Titulo1Jes= ''
  Company1Jes= ''
  EDescripcion1Jes= ''
  DR1Jes= ''
  D1Jes= ''
  L1Jes= ''

//------------------------------------Education----------------------------------------
  Titulo1EJes= ''
  Company1EJes= ''
  E1Jes= ''
  Titulo2EJes= ''
  Company2EJes= ''
  E2Jes= ''
  Titulo3EJes= ''
  Company3EJes= ''
  E3Jes= ''
//-------------------------------------Skills--------------------------------------
  SKJes1= ''
  SKJes2= ''
  SKJes3= ''
  SKJes4= ''
  SKJes5= ''
  SKJes6= ''
  SKJes7= ''
  SKJes8= ''
  SKJes9= ''
  SKJes10= ''
  SKJes11= ''
  SKJes12= ''
  SKJes13= ''
  SKJes14= ''
  SKJes15= ''
  SKJes16= ''
  SKJes17= ''
  SKJes18= ''
  SKJes19= ''
  SKJes20= ''
  SKJes21= ''
  SKJes22= ''
  SKJes23= ''
  SKJes24= ''
  SKJes25= ''
  SKJes26= ''
  SKJes27= ''
  SKJes28= ''
  SKJes29= ''
  SKJes30= ''
  SKJes31= ''
  SKJes32= ''
  SKJes33= ''
  SKJes34= ''
  SKJes35= ''
  SKJes36= ''
  SKJes37= ''
  SKJes38= ''
  SKJes39= ''
  SKJes40= ''
//-------------------------------------Recomendations Recived--------------------------------------


  RNameJes1= ''
  RDataJes1= ''
  RWorkJes1= ''
  RTextJes1= ''
  RNameJes2= ''
  RDataJes2= ''
  RWorkJes2= ''
  RTextJes2= ''
  RNameJes3= ''
  RDataJes3= ''
  RWorkJes3= ''
  RTextJes3= ''
  RNameJes4= ''
  RDataJes4= ''
  RWorkJes4= ''
  RTextJes4= ''
  RNameJes5= ''
  RDataJes5= ''
  RWorkJes5= ''
  RTextJes5= ''
  RNameJes6= ''
  RDataJes6= ''
  RWorkJes6= ''
  RTextJes6= ''
  RNameJes7= ''
  RDataJes7= ''
  RWorkJes7= ''
  RTextJes7= ''


  buscar(){
    if(this.nombre=="guillermoplazas-gerente-de-talento-humano") this.Gui();
    else if(this.nombre=="jesicalogioco-safarigroup")this.Jess();
  }

  Gui(){
    this.inicio = false;
    this.gui = true;
    this.DescripcionGui= 'Magister Director de Talento Humano con más de 10 años de experiencia liderando y estructurando equipos de trabajo alineados a las organizaciones.Cuento con gran habilidad para diseñar y ejecutar proyectos de cultura organizacional,desarrollo de talentos (planes de sucesión/retención),clima organizacional y selección estratégica de capital humano, que sean medibles y sustentables en el tiempo.Tengo conocimiento y manejo de la legislación laboral colombiana, SGSST y demás temas regulatorios que competen al área.Soy gestor de soluciones innovadoras, negociador y puente entre los colaboradores y la empresa. Busco y me destaco por influenciar y movilizar manera positiva a las personas dentro de los equipos para el cumplimiento de los objetivos.Conocimiento en SAP, AS400 y sales forcé, indicadores de gestión, métricas y construcción de informes gerenciales.'

    this.UbicacionGui = 'Location: Bogota, D.C., Capital District, Colombia'
    this.DireccionURLGui =`https://www.linkedin.com/in/guillermoplazas-gerente-de-talento-humano/`


    this.Titulo1Gui = 'Gerente de Gestiòn Humana'
    this.Company1Gui = 'Credifamilia Compañía de Financiamiento S.A.'
    this.EDescripcion1Gui = 'Description: Reporte directo a Presidencia.Funciones: Liderar y garantizar el cumplimiento de los indicadores de todos los procesos del área de gestión humana: Apoyo co-liderando la estrategia corporatiy 88 en 2021.'
    this.DR1Gui = 'Data range: Jan 2020 - Present'
    this.D1Gui = 'Duration: 2 yrs 1 mo'
    this.L1Gui = 'Location: Bogotá D.C., Colombia'

    this.Titulo2Gui = 'Gerente de Recursos Humanos y administrativo.'
    this.Company2Gui = 'Aportes en Línea'
    this.EDescripcion2Gui = 'Description: Reporte directo a gerencia general.Funciones: Liderar y garantizar el cumplimiento de los indicadores de todos los procesos del área de gestión humana (Cultura, atracción, selección, retención, sucesión, desarrollo, Bienestar, inducción, formación, capacitación, nómina, clima bajo metodología GPTW, Compensación, Legislación Laboral, headcount) y demás procesos administrativos.Resultados: \tEstructuré y ejecuté del mapa de talento de la compañía para de 2016 al 2020.\tLideré el proceso de alineación cultural producto de la compra de  una nueva compañía de tecnología (100 colaboradores), que apalancó la estrategia 2019-2020 con base en medición de cultura actual-diseño de cultura requerida, rediseño de valores, conductas, acciones de tangibilización, competencias estratégicas, alineación de políticas.\tImplementé la nueva metodología de medición y gestión de clima organizacional GPTW y acciones de intervención. Logrando así un incremento positivo de 74 a 77 en el 2016, 77 a 85 en el 2017 y 85 a 98 en 2018 y una calificación fuera de concurso en Estudio Mckinsey a nivel suramericano en salud organizacional en el 2019. \tEstructuré y ejecuté el plan de formación y desarrollo y proyección de talento con enfoque en HIPO logrando una cobertura del 97% y un impacto en productividad del 21% con respecto a las vigencias 2018 y 2019.\tRobustecí la metodología de selección de nuevos colaboradores bajo Assessment con base en cambios comportamentales y conductuales soportados en DISC logrando así una disminución en la rotación de personal del 27% para el 2016 y del 12% para el 2019.\tIntegré un equipo de líderes donde logramos las certificaciones ISO 9001, ISO 2015 e ISO 27001para la organización.'
    this.DR2Gui = 'Data range: Dec 2015 - Jan 2020'
    this.D2Gui = 'Duration: 4 yrs 2 mos'
    this.L2Gui = 'Location: Edificio Banco de Occidente Piso 12'

    this.Titulo3Gui = 'SubGerente General ( Fondo de empleados Jumbo, Metro, Easy)'
    this.Company3Gui = 'Cencosud S.A.'
    this.EDescripcion3Gui = "Description: 	Reporte directo a gerencia general.Funciones: Garantizar el cumplimiento de los objetivos e indicadores estratégicos de los procesos administrativos y de Talento Humano, garantizando así los resultados comerciales y financieros de cara a la eficiente atención de 14.000 afiliados.Resultados: \tGracias a la planeación estructural que incluía formación y desarrollo y fortalecimiento de clima laboral de los empleados del fondo, se mantuvo un índice de rotación por debajo del 10% para las vigencias 2014 y 2015, sobre una población de 33 personas de los cuales 18 eran comerciales. \tEstructuré y ejecuté el plan de ferias de vivienda y educación en todas las tiendas, Jumbo, Metro e Easy (120 ferias con más de 60 proveedores) y el programa “feria de la salud” en 30 tiendas logrando un impacto de 2.000 afiliados asistentes en más de 15 ciudades. \tSobre cumplí los indicadores del mapa estratégico asignados a la subgerencia con un 105% en el 2013. 110% en el 2014 y 112% en el 2015. \tLideré y ejecuté el proceso de vinculación masiva al fondo de 1.000 empleados Easy."
    this.DR3Gui = 'Data range: Jul 2013 - Dec 2015'
    this.D3Gui = 'Duration: 	2 yrs 6 mos'
    this.L3Gui = 'Location: Av 9 no 125-30'

    this.Titulo4Gui = 'Fondo Nacional del Ahorro (Página Oficial)'
    this.Company4Gui = 'SubGerente General ( Fondo de empleados Jumbo, Metro, Easy)'
    this.EDescripcion4v = 'Description: Garantizar los indicadores administrativos y de gestión humana de las personas inmersas en el contrato tercerizado enfocado en el estudio de títulos con el FNA que derivaba en la carta de oferta de crédito para afiliados.'
    this.DR4Gui = 'Data range: Jan 2011 - Jun 2013'
    this.D4Gui = 'Duration: 2 yrs 6 mos'
    this.L4Gui = 'Location: CLL 12 NO 7-32'

    this.Titulo5Gui = 'Auditor de procesos de talento humano'
    this.Company5Gui = 'Contraloría General de la República de Colombia'
    this.EDescripcion5Gui = 'Description: Auditar todos los procesos de talento humano de las entidades públicas Ministerio de Educación Nacional, Superintendencia de Salud, Alcaldía de Cajicá, Caprecom emitiendo el respectivo concepto-informe.Procesos auditados: atracción, selección, retención, sucesión, Bienestar, inducción, formación, capacitación, nómina, Compensación, Legislación Laboral, headcount.Elegido mejor auditor 2009.'
    this.DR5Gui = 'Data range: Apr 2009 - Oct 2010'
    this.D5Gui = 'Duration: 1 yr 7 mos'
    this.L5Gui = 'Location: CALLE 17 CRA 10'

    //------------------------------------Education----------------------------------------

    this.Titulo1EGui = 'Administrador de empresas'
    this.Company1EGui = 'CESA'
    this.E1Gui= 'Data range: 1998 - 2003'

    this.Titulo2EGui = 'Especialización Pensamiento Estratégico y Prospectiva'
    this.Company2EGui = 'Universidad Externado de Colombia'
    this.E2Gui= 'Data range: 2016 - 2018'

    this.Titulo3EGui = 'Maestría en Dirección de Recursos Humanos'
    this.Company3EGui = 'ENEB - Escuela de Negocios Europea de Barcelona'
    this.E3Gui= 'Data range: 2016 - 2019'


    //-------------------------------------Skills--------------------------------------
    this.SKGu1= 'Cambio organizacional'
    this.SKGu2= 'Liderazgo de equipos'
    this.SKGu3= 'Planificación estratégica'
    this.SKGu4= 'Negociación'
    this.SKGu5= 'Estrategia empresarial'
    this.SKGu6= 'Análisis financiero'
    this.SKGu7= 'Recursos humanos'
    this.SKGu8= 'Estrategia'
    this.SKGu9= 'Gestión de proyectos'
    this.SKGu10= 'Selección de personal'
    this.SKGu11= 'Microsoft Office'
    this.SKGu12= 'Liderazgo'
    this.SKGu13= 'Gestión del talento humano'
    this.SKGu14= 'Liderazgo de equipos multidisciplinarios'
    this.SKGu15= 'Aptitudes para hacer presentaciones'
    this.SKGu16= 'Team Leadership'
    this.SKGu17= 'Formación y desarrollo'
    this.SKGu18= 'Relaciones laborales'
    this.SKGu19= 'Gestión, Trabajo en equipo'
    this.SKGu20= 'Inglés'
    this.SKGu21= 'Orientación a objetivos'
    this.SKGu22= 'Mejora de procesos'
    this.SKGu23= 'Relaciones interpersonales'



    //-------------------------------------Recomendations Recived--------------------------------------

    this.RName1= 'Juliana Moreno Montoya'
    this.RData1= 'Date: April 16, 2021,'
    this.RWork1= 'MENTORÍA EN DESARROLLO PROFESIONAL | ESTRATEGIA PERSONAL | HOJAS DE VIDA | EVALUACION Y DESARROLLO | SELECCIÓN | TRANSICIÓN DE CARRERA | OUTPLACEMENT | PROCESO DE GESTIÓN LABORALMENTORÍA EN DESARROLLO PROFESIONAL | ESTRATEGIA PERSONAL | HOJAS DE VIDA | EVALUACION Y DESARROLLO | SELECCIÓN | TRANSICIÓN DE CARRERA | OUTPLACEMENT | PROCESO DE GESTIÓN LABORAL'
    this.RText1= 'Guillermo es un Directivo de alto nivel con una marcada orientación al resultado; cuenta con una sólida experiencia liderando estratégicamente áreas de gestión del Talento Humano en los procesos de selección, vinculación, evaluación y desarrollo, planes de carrera, gestión del cambio, gestión de clima y cultura. Adicional con una base administrativa robusta que le permite gestionar procesos de manera exitosa e integral. Es un formador de líderes de alto desempeño.'

    this.RName2= 'CAMILO ANDRÉS RODRIGUEZ MURILLO'
    this.RData2= 'Date: June 25, 2020,'
    this.RWork2= 'Chief Technology Officer - CTO en Gluky GroupChief Technology Officer - CTO en Gluky Group'
    this.RText2= 'Guillermo Plazas es una persona que tienen bastantes habilidades gerenciales, dentro de las que se encuentran: el compromiso al logro, siempre busca alternativas ante los inconvenientes y piensa enfocado en tener soluciones eficaces y efectivas; tiene un gran sentido humano, reconoce que el mayor activo en una organización son las personas; tiene un excelente manejo de terceros, realiza fuertes negociaciones de grandes proyectos enfocado siempre a los objetivos corporativos de la organización; y logra poseer una amplia visión de la compañía lo que le permite saber direccionar y dirigir los esfuerzos de su equipo de forma adecuada, generando motivaciones y sinergias entre los diferentes grupos de trabajo de la compañía.'

    this.RName3= 'Cesar Pachón Porras'
    this.RData3= 'Date: January 31, 2020'
    this.RWork3= 'Coordinador de Desarrollo de Negocios en Aportes en LíneaCoordinador de Desarrollo de Negocios en Aportes en Línea'
    this.RText3= 'Guillermo es una excelente profesional, dando el máximo de sus capacidades como líder y comprometiendo a su equipo de trabajo con la consecución de los objetivos. El sentido humano con las personas y la integridad lo caracterizan.'

  }

  Jess(){
    this.jess = true;
    this.inicio = false;
    this.DescripcionJes = `𝕊𝕠𝕓𝕣𝕖 𝕊𝕒𝕗𝕒𝕣𝕚 𝔾𝕣𝕠𝕦𝕡 🐘
    Safari Group nace de la pasión por darles real valor a las Personas. Nos basamos en ser y hacer diferente. Somos flexibles, auténticos y proactivos.🌎🙌

    🕵️ Realizamos Búsquedas para el área IT (tecnología) 👩‍💻

    Podes seguir a #safarigroup o en mi perfil (Destacado) ver las vacantes que tenemos, 
    ✔ También en nuestra web https://safari-group.com/ 👈

    𝕊𝕠𝕓𝕣𝕖 𝕞í 🧍‍♀️
    Lic. en RR.HH. - Emprendedora, con gran pasión por darle Valor a las Personas. 😊
    Con actitud y capacidad de formar parte de equipos interdisciplinarios, afrontar nuevos desafíos, que me alienten a seguir creando y disfrutando de mi profesión. ✨

    👊Perseverante, luchadora y en constante formación.🧠
    Amante del 🧉 y de los debates 😎 que nos enriquecen. 
    Estoy convencida que "Nada energiza más a una persona como lo hace la Pasión" 💕

    😉¿ℂ𝕠𝕟𝕖𝕔𝕥𝕒𝕞𝕠𝕤? 
    Hagamos honor a esta maravillosa red. Espero tu conexión. 🤝

    Abrazo 💜🤗`

    this.UbicacionJes = 'Greater Buenos Aires'
    this.DireccionURLJes = 'https://www.linkedin.com/in/jesicalogioco-safarigroup/'

    //------------------------------------Experience----------------------------------------

    this.Titulo1Jes = 'IT Recruiting Manager | Founder | Entrepreneur'
    this.Company1Jes = 'Safari Group HR'
    this.EDescripcion1Jes = 'Description: Conexiones Genuinas en RR.HH.Global Recruiting - Especialistas en Adquisición de Talento IT - Consultor IT.Desarrollo personal y de equipos.'
    this.DR1Jes = 'Data range: Jan 2020 - Present'
    this.D1Jes = 'Duration: 4 yrs 1 mo'
    this.L1Jes = 'Location: Caba, Argentina'


    //------------------------------------Education----------------------------------------

    this.Titulo1EJes = 'Licenciatura, Gestión de recursos humanos/Administración de personal, general'
    this.Company1EJes = 'Universidad de Ciencias Empresariales y Sociales'
    this.E1Jes= 'Data range: 2011 - 2016'

    this.Titulo2EJes = 'Coaching Ontológico'
    this.Company2EJes = 'Centro de e-Learning UTN FRBA'
    this.E2Jes= 'Data range: 2019 - 2019'

    this.Titulo3EJes = 'Diplomatura en Habilidades Gerenciales y Trabajo en Equipo'
    this.Company3EJes = 'Capacitarte'
    this.E3Jes= 'Data range: 2017 - 2017'


    //-------------------------------------Skills--------------------------------------

    this.SKJes1= 'Recruiter IT'
    this.SKJes2= 'Soluciones de RR. HH.'
    this.SKJes3= 'Consultoría de recursos humanos'
    this.SKJes4= 'Formación de personal'
    this.SKJes5= 'Planificación estratégica'
    this.SKJes6= 'Selección de personal a través de Internet'
    this.SKJes7= 'Selección de personal'
    this.SKJes8= 'Estrategia'
    this.SKJes9= 'Microsoft Office'
    this.SKJes10= 'LinkedIn Recruiter'
    this.SKJes11= 'Canva'
    this.SKJes12= 'Microsoft Excel'
    this.SKJes13= 'Trabajo en equipo'
    this.SKJes14= 'Desarrollo personal'
    this.SKJes15= 'Team Building'
    this.SKJes16= 'Negociación'
    this.SKJes17= 'Liderazgo de equipos'
    this.SKJes18= 'Desarrollo organizacional'
    this.SKJes19= 'Relaciones con los empleados'
    this.SKJes20= 'Servicio de atención al cliente'
    this.SKJes21= 'Recursos humanos (RR. HH.)'
    this.SKJes22= 'Dirección y desarrollo de equipos de trabajo'
    this.SKJes23= 'Gestión y motivación de equipos'
    this.SKJes24= 'Comunicacion'
    this.SKJes25= 'Gestión del talento humano'
    this.SKJes26= 'Formación y desarrollo'
    this.SKJes27= 'Capacitación'
    this.SKJes28= 'Coaching'
    this.SKJes29= 'Gestión de personal'
    this.SKJes30= 'Relaciones laborales'
    this.SKJes31= 'Atención al cliente'
    this.SKJes32= 'Formación'
    this.SKJes33= 'Español'
    this.SKJes34= 'Escucha activa'
    this.SKJes35= 'Networking'
    this.SKJes36= 'Redes sociales en internet'
    this.SKJes37= 'LinkedIn'
    this.SKJes38= 'Data Intelligence'
    this.SKJes39= 'Bienestar de los empleados'
    this.SKJes40= 'Human Resources Information Technology (HRIT)'

    //-------------------------------------Recomendations Recived--------------------------------------

    this.RNameJes1= 'Mauro Bonadeo ✅'
    this.RDataJes1= 'Date: November 8, 2021'
    this.RWorkJes1= 'Senior Talent Acquisition IT | Psychology | RRHH | LATAM | +3000 | 👇🔝 Senior Talent Acquisition IT | Psychology | RRHH | LATAM | +3000 | 👇'
    this.RTextJes1= 'Jesica es una persona dinámica y muy responsable , altamente recomendable para compañías de software que quieran conseguir los mejores recursos IT. Siempre atenta y dada cuando surgen dudas. Un lujo contactar con ella. Saludos, Mauro.'

    this.RNameJes2= 'Hernan Ezequiel Oses'
    this.RDataJes2= 'Date: October 26, 2021'
    this.RWorkJes2= 'Programador en PHP, HTML, CSS, C++ Jr.Programador en PHP, HTML, CSS, C++ Jr.'
    this.RTextJes2= 'Jesica es una persona hermosa en todos los sentidos. Es muy profesional y empatica a la vez, pero se maneja desde sus principios y desde el corazon enorme que tiene para dar la oportunidad a las personas que aunque no tengan todo lo que se pide siempre da aliento y fuerzas para alcanzar lo que uno quiere. No solo es una recomendación, es una manera de reconocer la increíble persona que es y que se merece todo el reconocimiento del mundo. Muchas gracias por aportar tu granito de arena desde tu lugar y hacer que recursos humanos sea mejor ♡'

    this.RNameJes3= 'Joel Reyes'
    this.RDataJes3= 'Date: October 1, 2021'
    this.RWorkJes3= 'Software Engineer at CGISoftware Engineer at CGI'
    this.RTextJes3= 'Jesica has been an excellent IT recruiter, she shows interest in the candidates well-being, making the hiring process comfortable all the time. In my experience in some recruitment processes, Jesica is one of the few recruiters that shows how she loves her career, being a good person all the time.'

    this.RNameJes4= 'Hernán De Souza'
    this.RDataJes4= 'Date: June 28, 2021'
    this.RWorkJes4= 'Senior Web Application DeveloperSenior Web Application Developer'
    this.RTextJes4= 'Jesica fue una excelente anfitriona en el proceso, muy profesional y atenta. Atendió todas mi dudas y me apoyo durante todo el proceso dando lo mejor de si. La recomiendo totalmente para las personas que estén buscando un cambio laboral y o encontrar desafíos en su carrera profesional.'

    this.RNameJes5= 'Andrea Bernacchia'
    this.RDataJes5= 'Date: June 10, 2020'
    this.RWorkJes5= 'Ingeniera en Alimentos. Esp. Ing. en Calidad Ingeniera en Alimentos. Esp. Ing. en Calidad '
    this.RTextJes5= 'Jessica analizó mi CV. Excelente mirada. Me hizo reflexionar y enfocarme. Muchas gracias, Jessica.'

    this.RNameJes6= 'Marcela Politi'
    this.RDataJes6= 'Date: April 21, 2020'
    this.RWorkJes6= 'Desarrollo Personal | Liderazgo personal y Eneagrama | Consultor estratégico 360 | Equipos con AlmaDesarrollo Personal | Liderazgo personal y Eneagrama | Consultor estratégico 360 | Equipos con Alma'
    this.RTextJes6= 'Jesica es excelente profesional, desarrolla sus aptitudes de manera eficaz y eficiente. Su enfoque es pragmático y alentador desde es primer contacto. Logra optimizar los recursos de quienes trabajan con ella.  Su calidez humana hace de Jesica una persona sensible a la necesidad, solidaria, empática, y muy inspiradora. Es un verdadero placer conectar y trabajar con ella. '

    this.RNameJes7= 'Julieta Labombarda'
    this.RDataJes7= 'Date: April 20, 2020'
    this.RWorkJes7= 'Accountant | Business Management Consultant | Internal Audit | HR | Recruiting | Change Management | FreelanceAccountant | Business Management Consultant | Internal Audit | HR | Recruiting | Change Management | Freelance'
    this.RTextJes7= 'Jesica ha demostrado una vez más ser una excelente profesional, apasionada en lo que hace, con una actitud positiva, generosa y dando valor no solo a su trabajo sino a las personas con las que lo lleva a adelante. Confiable, resolutiva y con mucho conocimiento y expertise. Realmente recomiendo trabajar con ella, lograrán el objetivo buscado en el menor tiempo que esperan y con un alto rendimiento.'

  }


  

}
