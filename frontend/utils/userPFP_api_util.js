import defaultPFPBlue from '../../app/assets/images/defaultProfilePicBlue.png';
import defaultPFPCyan from '../../app/assets/images/defaultProfilePicCyan.png';
import defaultPFPGray from '../../app/assets/images/defaultProfilePicGray.png';
import defaultPFPGreen from '../../app/assets/images/defaultProfilePicGreen.png';
import defaultPFPPurple from '../../app/assets/images/defaultProfilePicPurple.png';
import defaultPFPYellow from '../../app/assets/images/defaultProfilePicYellow.png';
import defaultPFPRed from '../../app/assets/images/defaultProfilePicRed.png';
import defaultPFPStrifeGreen from '../../app/assets/images/defaultProfilePicStrifeGreen.png';
import defaultPFPSecretPink from '../../app/assets/images/defaultProfilePicSecretPink.png';
import defaultPFPBlurple from '../../app/assets/images/defaultProfilePicBlurple.png';


export const returnDefaultUserPFP = (color_tag) => {
    let userPFPS = {
        1: defaultPFPRed,
        2: defaultPFPBlurple,
        3: defaultPFPGray,
        4: defaultPFPYellow,
        5: defaultPFPGreen,
        6: defaultPFPBlue,
        7: defaultPFPPurple,
        8: defaultPFPSecretPink,
        9: defaultPFPCyan,
        10: defaultPFPStrifeGreen,
    }
    return userPFPS[color_tag];
}