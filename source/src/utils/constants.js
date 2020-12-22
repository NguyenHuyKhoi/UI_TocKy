
import {FaHome,FaAdd,FaAdobe, FaMobile,FaWikipediaW,
    FaAccessibleIcon,FaBitcoin, FaHubspot, 
    FaPaypal, FaBroom,FaUser,FaTasks,FaFacebookMessenger,FaStreetView,FaSignOutAlt,
    FaArrowDown,
    FaArrowUp} from "react-icons/fa"
export const THREHOLD_PRESS_WAITING_TIME=1000;
export const bullshitIcons={
    home :<FaHome/>,
    cat_design:<FaAdobe/>,
    cat_mobile:<FaMobile/>,
    cat_web:<FaWikipediaW/>,
    cat_account:<FaBitcoin/>,
    cat_customer:<FaAccessibleIcon/>,
    cat_engineer:<FaHubspot/>,
    cat_sale:<FaPaypal/>,
    cat_writing:<FaBroom/>,

    //sidebar_icons :
    user:<FaUser/>,
    task:<FaTasks/>,
    chat:<FaFacebookMessenger/>,
    setting:<FaStreetView/>,
    payment:<FaPaypal/>,
    logout:<FaSignOutAlt/>,

    up:<FaArrowUp/>,
    down:<FaArrowDown/>

    
    
}

export const routePaths={
    HOME:'/',
    PRACTICE:'/thuc_hanh',
    FEEDBACK:'/gop_y',
    ROOM_LIST:'/thi_dau/danh_sach_phong',
    ROOM_DETAIL:'/thi_dau/phong',
    ROOM_RESULT:'/thi_dau/ket__qua',
    SETTING:'/cai_dat',
    LESSON_LIST:'/bai_hoc/danh_sach',
    EDITOR:'/soan_thao',
    ROOM_HISTORY:'/thi_dau/lich_su',
    ROOM_PLAY:'/thi_dau/choi',
    STATISTIC:'/thong_ke'
}


// sidebar : flex=1,  body : flex=3
export const SIDEBAR_RATIO=4
export const BOX_SHADOW='5px 5px 5px 5px #707070'
export const BODY={
    FLEX:5,
    PADDING_TOP:40
}

export const PADDING_BODY_DASHBOARD=50;

export const  TEXT_SIZES={
    TINY:10,
    NORMAL : 20,
    SMALL  :16,
    BIG    :24,
    HEADER :28,
    HUGE :32
}


export const CONTENT_MODE={
    SHOW_LESSON:0,
    SHOW_RULE:1,
    SHOW_PROCESS:2
}

export const PRACTICE_MODE={
    KEYBOARD:0,
    RHYME:1,
    WORD:2,
    SENTENCE:3,
    PARAGRAPH:4
}

export const KEYBOARD_LAYER={
    ONLY_SHOW_STENO_KEYBOARD:0,
    SHOW_STENO_KEYBOARD_AND_SUGGESTION:1,
    SHOW_ALL:2
}

export const WORD_STATE={
    NOT_TYPED:0,
    IS_TYPING:1,
    WRONG:2,
    CORRECT:3
}

export const STENO_BUTTON_STATE={
    CORRECT:0,
    WRONG:1,
    HIGHLIGHT:2,
    NONE:3,
    
}