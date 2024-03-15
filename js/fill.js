const fill = {
    "name": "Neider Gainza Llacer.",
    "ocupation": {"es":"Desarrollador de Software.", "en":"Jr Sofware Developer."},
    "about_me": {"es":"SOBRE MI", "en":"ABOUT ME"},
    "description": {"es":" Estudiante de Ciencias de la Computación, con resultdos relevantes en olimpiadas nacionales y regionales de matemáticas y programación competitiva, en busca de comenzar su vida laboral como desarrollador de software.", "en":"Computer Science student, with relevant results in national and regional math and competitive programming olympics, looking to start his working life as a software developer."},
    // "contacts": {"es":"CONTACTOS", "en":"CONTACTS"},
    "phone_number": "+5355306873",
    "email": "neidergainza1@gmail.com",
    "location": {"es":"Guantánamo, Cuba", "en":"Guantanamo, Cuba"},
    "education":[
        {"es":"EDUCACIÓN:", "en":"EDUCATION:"},
        {"en":"BACHELOR'S DEGREE.", "es":"BACHILLERATO."},
        "IPVCE José Maceo Grajales.",
        "2016 - 2019.",
        {"en":"College Degree in Computer Science.", "es":"Licenciatura en Ciencias de la Computación."},
        {"es":"Universidad de Oriente, Cuba.", "en":"Eastern University, Cuba."},
        {"es":"2020 - aún.", "en":"2020 - still."},
    ],
    "skills":[
        {"es":"HABILIDADES:", "en":"SKILLS:"},
        "C, C++.",
        "Python, Django, Odoo.",
        "Git, Github.",
        {"es":"SQL(nivel básico).", "en":"SQL(basic level)."},
        {"es":"HTML,CSS,JS(nivel básico).", "en":"HTML,CSS,JS(basic level)."},
        {"en":"Good at math.", "es":"Bueno en matemáticas."},
    ],
    "achievements": [
        {"en":"ACHIEVEMENTS:", "es":"LOGROS:"},
        {"es":"Clasificación a la Final Caribeña de ICPC (2022 y 2023).", "en":"Cualification to the ICPC Caribeean Final (2022 and 2023)."},
        {"es":"Dos veces preselección nacional para equipo Cuba IMO.", "en":"Twice naciotal preselection for Team Cuba IMO."},
        {"es":"Tres veces medallista en la olimpiada nacional preuniversitaria de matemática cubana( plata en 2019 y bronce en los años 2017 y 2018).", "en":"Three times medalist in the cuban national pre-university mathematical olympiad (silver in 2019 and bronze in 2017 and 2018)."},
        {"es": "Participación en el campeonato nacional juenil de ajedrez cubano en el año 2017.", "en":"Participation in the Cuban National Youth Chess Championship in 2017."},

    ],
    "experience":[
        {"es":"EXPERIENCIA:", "en": "EXPERIENCE:"},
        {"es":"","en":"Odoo freenlace developer for 6 months"},
        // {"es":"Proyectos como trabajador independiente disponibles en mi cuenta de GitHub", "en":"Projects as a freelacer abailable on my GitHub account"},
        {"es":"Experiencia como programador competitivo (C++ y Python)", "en":"Expirience as a competitive programmer (C++ and Python)"},
    ],
    "others":[
        {"es":"OTRAS:", "en":"OTHERS:"},
        {"es":"Español (nativo).", "en":"Espanish (native)."},
        {"es":"Inglés (B1)", "en":"English (B1)"},
        {"es":"Trabajo en equipo.", "en": "Team Work."},
        {"es":"Rápido aprendizaje.", "en":"Fast Learning."},
    ],
    "objetives":[
        {"es":"OBJETIVOS:", "en":"OBJETIVES:"},
        {"es":"Acumular experiencia como desarrollador de software.", "en":"Accumulate experience as a software developer."},
        {"es":"Concluir estudios.", "en":"Finish studies."},
    ],
};


const keys = [
    "name",
    "ocupation",
    "about_me",
    "description",
    "contacts",
    "phone_number",
    "email",
    "location",
    "education",
    "skills",
    "achievements",
    "experience",
    "others",
    "objetives",
];
 

const choice = (obj, key, language)=>{
    try{
        if( typeof obj  != "object" ){
            document.querySelector('#' + key).textContent = obj;
        }else{
            if( obj instanceof Array ){
                let titulo         = document.createElement("h2");
                titulo.classList.add("titulo")
                titulo.id          = key + "_titulo";
                
                let lista = document.createElement("ul");
                lista.id  = key + "_list";

                document.querySelector('#' + key).appendChild(titulo);
                document.querySelector('#' + key).appendChild(lista);
                
                choice(obj[0],key+ "_titulo", language);
                
                for(let i = 1; i< obj.length; i++){
                    let elemento = document.createElement("li");
                    elemento.id  = key + i;
                    elemento.classList.add("elemento")

                    lista.appendChild(elemento);
                    choice(obj[i],key+ i, language);
                }    
            }

            else{
                document.querySelector('#' + key).textContent = obj[language];
            }
        }
    }
    catch{
        //console.log("No element named " + key);
    }
}


const fill_document = ( language )=>{
    keys.forEach( key => {
        choice(fill[key], key, language);
    })
}
fill_document("en");





const canvas = document.querySelector(".canva");
const imagen = document.querySelector(".canva_img");
const imagen_perfil = document.querySelector(".header-img img");
const accion = ()=>{
    canvas.classList.toggle("hide");
    imagen.classList.toggle("hide");
}

imagen.addEventListener("click",accion)
imagen_perfil.addEventListener("click", accion)
canvas.addEventListener("click", accion)

console.log("asdasd")







