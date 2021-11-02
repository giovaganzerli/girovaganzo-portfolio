import { controller } from 'controllerim';

// IMPORT IMAGES
import imgProfile from "../../../../assets/images/img-profile.png";

class _SectionIntroController {

    constructor() {

    }

    getProfileImage() {
        return imgProfile;
    }

    activeParallax(dataMouse, depth = 15) {
        let { x, y } = dataMouse.position;
        let { height, width } = dataMouse.elementDimensions;
        let posX = (width / 2 - x) / depth;
        let posY = (height / 2 - y) / depth;
        return {
            transform: `translate(${posX}px, ${posY}px)`,
        };
    };
}

export const SectionIntroController = controller(_SectionIntroController);