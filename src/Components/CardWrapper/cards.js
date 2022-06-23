import sofa_img from './img/sofa.png';
import keyBoard_img from './img/keyBoard.png';
import workMedia_img from './img/workMedia.png';
import dddone_img from './img/dddone.png';
import abstract_img from './img/abstract.png';
import handP_img from './img/handP.png';
import architect_img from './img/architect.png';
import calc_img from './img/calc.png';
import sport_img from './img/sport.png';

let counter = 0;

export const getSomeCards = () => {
    counter++;
    if (counter === 2) {
        return [{
            name: "SOFA",
            category: "Design",
            img: sofa_img
        },
            {
                name: "KeyBoard",
                category: "Branding",
                img: keyBoard_img
            },
            {
                name: "Work Media",
                category: "Illustration",
                img: workMedia_img
            },
            {
                name: "DDDone",
                category: "Motion",
                img: dddone_img
            },
            {
                name: "Abstract",
                category: "Design",
                img: abstract_img
            },
            {
                name: "HandP",
                category: "Branding",
                img: handP_img
            },
            {
                name: "Architect",
                category: "Motion",
                img: architect_img
            },
            {
                name: "CalC",
                category: "Design",
                img: calc_img
            },
            {
                name: "Sport",
                category: "Branding",
                img: sport_img
            },]
    } else return [{
        name: "SOFA" + counter,
        category: "Design",
        img: sofa_img
    },
        {
            name: "KeyBoard" + counter,
            category: "Branding",
            img: keyBoard_img
        },
        {
            name: "Work Media" + counter,
            category: "Illustration",
            img: workMedia_img
        },
        {
            name: "DDDone" + counter,
            category: "Motion",
            img: dddone_img
        },
        {
            name: "Abstract" + counter,
            category: "Design",
            img: abstract_img
        },
        {
            name: "HandP" + counter,
            category: "Branding",
            img: handP_img
        },
        {
            name: "Architect" + counter,
            category: "Motion",
            img: architect_img
        },
        {
            name: "CalC" + counter,
            category: "Design",
            img: calc_img
        },
        {
            name: "Sport" + counter,
            category: "Branding",
            img: sport_img
        },]
};
