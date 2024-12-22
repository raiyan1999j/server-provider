import ServiceImg from "../../../public/serviceLogo.png";

export const Container=()=>{
    const capitalWord = "ABCDEFGHIJKLMNOPQRST";
const makeArray = capitalWord.split("");
const bgCollect= ["#CCE6FF","#FFE2A4","#FFC4C4","#80B7FF","#AFB6E5","#F4ACC8","#4CD9ED","#FFEDCD"];

const txtCollect=["#6C90B4","#CAA452","#EC6F6F","#3784E8","#707CCC","#E5699A","#1AA9BE","#EDBB63"];

const mergeColor= bgCollect.map((bg,index)=>({bg,txt:txtCollect[index]}));
const container = [];

makeArray.map((items)=>{
    let obj = {
        title : items,
        clr : function(){
            let repeat = Math.floor(Math.random() * 8);

            return mergeColor[repeat]
        }
    }

    container.push(obj)
})

return container;
}

export const ServiceList =()=>{
    const serviceList = [
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        },
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        },
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        },
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        },
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        },
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        },
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        },
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        },
        {
            serviceImg: ServiceImg,
            title: "Plugin name",
            details: "Have an existing website already? Select this option to Have",
            provider: "WPDeveloper"
        }
    ]

    return serviceList;
}

export const ExistingProduct=()=>{
    const existingProduct = [
        {
            title:"Blueprint Name One",
            feature:"default",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        },
        {
            title:"Blueprint Name One",
            accessible:[
                {txt:"A",txtColor:"#6C90B4",bg:"#CCE6FF"},
                {txt:"N",txtColor:"#C5A153",bg:"#FFE2A4"},
                {txt:"X",txtColor:"#CE7C7C",bg:"#FFC4C4"},
                {txt:"4+",txtColor:"#171A30",bg:"#80B7FF"}
            ]
        }
    ]

    return existingProduct;
}