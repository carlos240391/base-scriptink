
const sizeContainer = '1200px';

const sizes = {
    paddingMobile:'0px 10px'
}

const links = {
    logo:'/img/logo.png',
    logoAlt:'/img/logo_alt.png',
}

const themeDark = {
    dark:'#000000',
    light:'#ffffff',
    primary:'#007CC5',
    primaryVariant:'#036096',
    colorGray:'#707070'
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
        colors:colors
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
            {content:'<p>Las mejores ofertas para tu sitio, <a href="">contactanos</a></p>'},
            {content:'<p>Soluciones para tu negocio, <a href="">ve nuestras ofertas</a></p>'},
            {content:'<p>Productos a la medida, <a href="">cotiza</a></p>'},
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
        textColor:colors.primary,
    },
    sliderOpacitySettings:{
        visibility:true,
        sliders:[
            {
                src:'/img/slider_1.jpeg',
                visibilityCard:true,
                subheading:'ROLLER',
                title:'Activity Calendars',
                content:'See your entire schedule in an intuitive calendar, add repeating activities that start and stop as needed, create separate calendars for each of your groups, see upcoming client birthdays, calendar events, and much more!',
                textButton:'Ver mas',
                buttonURL:'/ver-mas',
                positionCard:'flex-start',
                opacity:'1',
                cardWidth:'500px',
                cardHeight:'300px',
                cardColor:'255,255,255'
            },
            {
                src:'/img/slider_2.jpeg',
                visibilityCard:true,
                subheading:'ROLLER',
                title:'Beautiful Reporting',
                content:'An just a few clicks you can create beautiful, printable documents. From care plans and client attendance, to your monthly and weekly activities calendar. Reporting has never been easier.',
                textButton:'Ver mas',
                buttonURL:'/ver-mas',
                positionCard:'center',
                opacity:'1',
                cardWidth:'500px',
                cardHeight:'300px',
                cardColor:'255,255,255'
            },
            {
                src:'/img/slider_3.jpeg',
                visibilityCard:true,
                subheading:'ROLLER',
                title:'Simply Helpful',
                content:'Creating an exciting activity program isn’t easy, theres paperwork to file, attendance to track, care plans to update, Government audits and more.',
                textButton:'Ver mas',
                buttonURL:'/ver-mas',
                positionCard:'flex-end',
                opacity:'1',
                cardWidth:'500px',
                cardHeight:'300px',
                cardColor:'255,255,255'
            },
        ],
        time:'10000',
        heightSlider:'700px',
        widthSlider:'100%',
        widthContent:sizeContainer,
        controls:true,
        colorDotsActive:colors.primary,
        colorDots:colors.light,
        colorTitles:colors.primary,
        colorContent:colors.colorGray,
        colorSubheading:colors.colorGray,
        overlayColor:colors.dark,
        opacity:'0.2',
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
            {icon:'fab fa-facebook-f', active:true, href:'www.facebook.com'},
            {icon:'fab fa-instagram', active:true, href:'www.instagram.com'},
            {icon:'fab fa-twitter', active:true, href:'www.twitter.com'},
            {icon:'fab fa-linkedin-in', active:true, href:'www.linkedinn.com'},
            {icon:'fab fa-youtube', active:true, href:'www.youtube.com'},
        ]
    },
    aboutSettings:{
        aboutContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software.",
        colorBody:colors.colorGray,
        colorSubheading:colors.primary,
        align:'center',
        services:[
            {icon:'/img/icon_1.svg', title:"Titulo del servicio", subheading:"SUBHEADING", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"},
            {icon:'/img/icon_2.svg', title:"Titulo del servicio", subheading:"SUBHEADING", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"},
            {icon:'/img/icon_3.svg', title:"Titulo del servicio", subheading:"SUBHEADING", content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"},
        ]
    },
    infoBannerSettings:{
        backColorInfo:colors.primary,
        textColorInfo:colors.light,
        heightSection:'500px',
        anchorTitle:'Más información',
        anchorLink:'http://www.google.com',
        subheading:'SUBHEADING',
        title:'Información de nuestra empresa',
        content:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
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
        faqsImg:"/img/faqs.svg",
        faqs:[
            {title:'pregunta uno', content:'Contenido de la tab uno'},
            {title:'pregunta dos', content:'Contenido de la tab dos'},
            {title:'pregunta tres', content:'Contenido de la tab tres'},
        ]

    }

}