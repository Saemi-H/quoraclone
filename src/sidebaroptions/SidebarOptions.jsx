import { AddBox } from '@material-ui/icons';
import React from 'react';
import './sidebarOptions.css'

const SidebarOptions = () => {
    return (
        <div className="sidebar-options">
            <div className="sidebar-option">
                <img src="https://mblogthumb-phinf.pstatic.net/MjAxOTExMDhfMjI5/MDAxNTczMTg1NDk0ODg5.xGxfjnnQdlQaEGhMTImHoPzd51n67Jsk71kUSzdfHTUg.yyOskaUxFOmps4fmFfApPizcAd5WPNRiy5cieo5Wt5Ag.JPEG.carmateme/dnpfaldkfjrhdh5_P.jpg?type=w800" alt="suit" />
                <p>정장입은 내 모습</p>
            </div>
            <div className="sidebar-option">
                <img src="http://file.mk.co.kr/meet/neds/2016/09/image_readtop_2016_621812_14727255742601003.jpg" alt="lee" />
                <p>언더아머입은 내 모습</p>
            </div>
            <div className="sidebar-option">
                <img src="https://i.ytimg.com/vi/HpRpKAw5JoM/hqdefault.jpg" alt="under armer" />
                <p>언더아머 단속반</p>
            </div>
            <div className="sidebar-option">
                <img src="https://cafe24img.poxo.com/lakai1922/web/product/big/201910/475d0b348ac2549de8c90e7f55697296.jpg" alt="lekai" />
                <p>리카이코리아</p>
            </div>
            <div className="sidebar-option">
                <img src="https://media-manager.starsinsider.com/1920/na_5b07d8459d64c.jpg" alt="cooking" />
                <p>요리</p>
            </div>
            <div className="sidebar-option">
               <AddBox />
                <p className="text">더보기</p>
            </div>
        </div>

        
    );
};

export default SidebarOptions;