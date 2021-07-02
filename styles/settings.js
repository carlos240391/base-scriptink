
const sizeContainer = '1200px';

const sizes = {
    paddingMobile:'0px 10px'
}

const links = {
    logo:'/img/logo.svg',
    logoAlt:'/img/imagotipo.svg',
}

const themeDark = {
    dark:'#000000',
    light:'#ffffff',
    primary:'#BB0E1D',
    primaryVariant:'#CFA028',
    secondary:'#e0a33c',
    primaryDark:'#14351B',
    colorGray:'#707070',
    colorLightGray:'#e2e2e2'
}

const colors =  themeDark;


export const themeSettings = {
    general:{
        fontURL:'"https://fonts.googleapis.com/css2?family=Mukta:wght@200;400;700&display=swap"',
        baseFont:"'Mukta', sans-serif",
        lightWeight:'200',
        regularWeight:'400',
        boldWeight:'700',
        sizeH1:'3rem',
        sizeFontBody:'2rem',
        sizeFontButtons:'2rem',
        wrapperSize:sizeContainer,
        paddingDesktop:'0px',
        paddingMobile:sizes.paddingMobile,
        align:'left',
        colors:colors,
        links:links
    },
    anouncementSettings:{
        visible:true,
        backColor:colors.dark,
        colorText:colors.light,
        fontSizeText:'1.5rem',
        widthAnouncement:sizeContainer,//Usa el width general del sitio
        heightAnouncement:'40px',
        paddingMobile:sizes.paddingMobile,
        paddingDesktop:'0px',
        position:'center',
        time:'5000',
        backColorClose:colors.light,
        textColorClose:colors.dark,
        anouncements:[
            {content:'<p>Número de registro federal permanente <strong>013/2015</strong></p>'},
            {content:'<p>Contamos con cobertura nacional.</p>'},
            {content:'<p>Profesionales en seguridad.</p>'},
        ]

    },
    navbarSettings:{
        logoURL:links.logo,
        sticky:true,
        heightMenu:'100px',
        paddingMenuDesktop:'0px',
        paddingMenuMobile:sizes.paddingMobile,
        widthMenu:sizeContainer,//Usa el width general del sitio
        backColor:colors.light,
        responsiveBackColor:colors.light,
        responsiveBackColorHover:colors.light,
        textColor:colors.light,
    },
    sliderOpacitySettings:{
        visibility:true,
        sliders:[
            {
                src:'https://images.unsplash.com/photo-1485230405346-71acb9518d9c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1542&q=80',
                visibilityCard:true,
                subheading:'WING SHOP',
                title:'Activity Calendars',
                content:'See your entire schedule in an intuitive calendar, add repeating activities that start and stop as needed, create separate calendars.',
                textButton:'Ver mas',
                buttonURL:'/ver-mas',
                positionCard:'center',
                opacity:'0',
                cardWidth:'700px',
                cardHeight:'250px',
                cardColor:'255,255,255',
                textAlign:'center',
                btnAlign:'center',
                backOpacity:'0.8',
                colorTitle:colors.primary,
                colorTextButton:colors.light
            },
            {
                src:'https://images.unsplash.com/photo-1621907318944-793fe071cf46?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
                visibilityCard:true,
                subheading:'WING SHOP',
                title:'Beautiful Reporting',
                content:'An just a few clicks you can create beautiful, printable documents. From care plans and client attendance, to your monthly and weekly activities calendar. Reporting has never been easier.',
                textButton:'Ver mas',
                buttonURL:'/ver-mas',
                positionCard:'center',
                opacity:'0',
                cardWidth:'700px',
                cardHeight:'250px',
                cardColor:'255,255,255',
                textAlign:'center',
                btnAlign:'center',
                backOpacity:'0.8',
                colorTitle:colors.primary,
                colorTextButton:colors.ligth
            },
            {
                src:'https://images.unsplash.com/photo-1621992834917-c9db7a22043f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1502&q=80',
                visibilityCard:true,
                subheading:'WING SHOP',
                title:'Simply Helpful',
                content:'Creating an exciting activity program isn’t easy, theres paperwork to file, attendance to track, care plans to update, Government audits and more.',
                textButton:'Ver mas',
                buttonURL:'/ver-mas',
                positionCard:'center',
                opacity:'0',
                cardWidth:'700px',
                cardHeight:'250px',
                cardColor:'255,255,255',
                textAlign:'center',
                btnAlign:'center',
                backOpacity:'0.8',
                colorTitle:colors.primary,
                colorTextButton:colors.light
            },
        ],
        time:'10000',
        heightSlider:'650px',
        widthSlider:'100%',
        widthContent:sizeContainer,
        controls:true,
        colorDotsActive:colors.primary,
        colorDots:colors.light,
        colorTitles:colors.primary,
        colorContent:colors.light,
        colorSubheading:colors.light,
        overlayColor:colors.dark,
        opacity:'0.2',
        gTextAlign:'center'
    },
    whatsappButtonSettings:{
        visibility:true,
        numberWhats:'+5215576816666',
        messageWhats:'Hola, me interesan sus servicios.'
    },
    progressBarSettings:{
        firstColor:colors.primary,
        secondColor:colors.primaryVariant
    },
    footerSettings:{
        widthFooter:sizeContainer,
        backColorFooter:colors.dark,
        paddingDesktop:'0px',
        paddingMobile:sizes.paddingMobile,
        logoURL:links.logoAlt,
        primaryColor:colors.primary,
        secondaryColor:colors.light,
        socialOptions:[
            {icon:'fab fa-facebook-f', active:true, href:'www.facebook.com', name:'Facebook'},
            {icon:'fab fa-instagram', active:true, href:'www.instagram.com', name:'Instagram'},
            {icon:'fab fa-twitter', active:false, href:'www.twitter.com', name:'Twitter'},
            {icon:'fab fa-linkedin-in', active:false, href:'www.linkedinn.com', name:'Linkedinn'},
            {icon:'fab fa-youtube', active:false, href:'www.youtube.com', name:'Youtube'},
        ]
    },
    aboutSettings:{
        aboutContent:"Somos una empresa mexicana, con más de 10 años de experiencia, constituida legalmente con número de registro federal permanente por parte de la Dirección General de Seguridad Privada 013/2015  comprometida con generar confianza con nuestros clientes brindándole un servicio de seguridad integral con personal capacitado y con los perfiles adecuados para desempeñar las funciones que su negocio, empresa, condominio requiere.",
        colorBody:colors.colorGray,
        colorSubheading:colors.primary,
        align:'center',
        services:[
            {icon:'/img/service-1.svg', title:"Guardias empresariales e industriales.", subheading:"ZENTINELA", content:"Perfil de elemento con nivel bachillerato, portando uniforme “formal” controlando accesos a visitantes, personal y proveedores, entradas y salidas de productos, equipos y vehículos; rondines, verificación del cumplimiento de las normas de la empresa."},
            {icon:'/img/service-2.svg', title:"Guardias para obras y construcciones.", subheading:"ZENTINELA", content:"Guardias equipados con fornitura completa, uniforme tipo comando, especializados en el control de accesos de personal, visitantes, proveedores así como entradas y salidas de vehículos, prevenir amenazas externas y anomalías dentro y fuera de la obra, rondas, verificar uso de equipos de seguridad."},
            {icon:'/img/service-3.svg', title:"Guardias de seguridad comercial.", subheading:"ZENTINELA", content:"Equipado con uniforme, fornitura completa y radio troncal, especializado en entradas y salidas de personal, mercancías, medidas de prevención de salud y a negocios con venta al publico, así como disuadir amenazas externas."},
            {icon:'/img/service-4.svg', title:"Guardias de seguridad corporativa.", subheading:"ZENTINELA", content:"Equipado con uniforme de gala (traje) Radio troncal con un nivel educativo superior, especializado en control de accesos, vehículos, visitas y personal. Registro continuo, rondas."},
            {icon:'/img/service-5.svg', title:"Guardias de seguridad residenciales.", subheading:"ZENTINELA", content:"Elementos de seguridad equipados con uniforme y fornitura completa, especializado en accesos de vehículos, visitantes y peatones, contando con un registro continuo de las personas ajenas que ingresan a la unidad habitacional o condominio, vigilar de manera preventiva y activa las instalaciones utilizando las herramientas electrónicas de monitoreo, detección y alarma, trabajando de la mano de las autoridades locales para mayor eficacia."},
            {icon:'/img/service-6.svg', title:"Guardias para eventos masivos.", subheading:"ZENTINELA", content:"Elementos especializados en patrullar el área en busca de actitudes sospechosas, evaluando los riesgos y trazar un plan de prevención de robos, vandalismo y algún tipo de violación a la propiedad privada, custodiando un lugar determinado de manera continua."},
        ]
    },
    infoBannerSettings:{
        backColorInfo:colors.primary,
        textColorInfo:colors.light,
        heightSection:'500px',
        anchorTitle:'CONTÁCTANOS',
        anchorLink:'http://www.google.com',
        subheading:'',
        title:'',
        content:'Contamos con cobertura nacional, adaptándonos geográficamente a sus necesidades locales.',
    },
    popRedesSettings:{
        visible:true,
        colorBack:colors.primary,
        colorText:colors.light,
        socialOptions:[
            {icon:'fab fa-facebook-f', active:true, href:'www.facebook.com'},
            {icon:'fab fa-instagram', active:true, href:'www.instagram.com'},
            {icon:'fab fa-twitter', active:true, href:'www.twitter.com'},
            {icon:'fab fa-linkedin-in', active:true, href:'www.linkedinn.com'},
            {icon:'fab fa-youtube', active:true, href:'www.youtube.com'},
        ]
    },
    faqsSettings:{
        visible:true,
        faqsImg:"/img/faqs-01.svg",
        colors:colors,
        faqs:[
            {title:'¿Cuáles son los tiempos de envío? ', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            {title:'¿Qué hago si quiero devolver un producto?', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            {title:'¿Puedo pagar con PayPal?', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            {title:'¿Y si cambio de dirección?', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
            {title:'¿Cuando llega mi paquete?', content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
        ]

    },
    directionsSettings:{
        visible:false,
        heightSection:'400px',
        colors:colors,
    },
    formSettings:{
        widthContainer:sizeContainer,
        heightContainer:'650px',
        backImage:'"https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"',
    },
    producstSettings:{
        visibilty:true,
        products:[
            {title:'Producto Uno', src:"/img/img-1.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
            {title:'Producto Uno', src:"/img/img-2.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
            {title:'Producto Uno', src:"/img/img-3.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
            {title:'Producto Uno', src:"/img/img-4.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
            {title:'Producto Uno', src:"/img/img-5.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
            {title:'Producto Uno', src:"/img/img-6.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
            {title:'Producto Uno', src:"/img/img-7.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
            {title:'Producto Uno', src:"/img/img-8.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
            {title:'Producto Uno', src:"/img/img-9.jpg", description:"Descripcion corta para producto de muestra, donde se detallan medidas y colores. Esta es una descripcion mas detallada del producto en el home.", button:'ver mas', precio:'$500.00'},
        ],
        container:sizeContainer,
        paddingMobile:sizes.paddingMobile,
        colors:colors
    }

}