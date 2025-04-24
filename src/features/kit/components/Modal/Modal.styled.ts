import styled from "styled-components"

export const ModalWrapper = styled.div`
    position: absolute;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    
    .wrapper {
       max-width: 300px;
       max-height: 600px;
       display: flex;
       flex-direction: column;
       justify-items: center;
       align-items: center;
       padding: 15px;
       background: #e1e3e6;
    
       .header {
           width: 100%;
           height: 20px;
           display: flex;
           justify-content: right;
           align-items: center;
    
           span {
               position: absolute;
               width: 25px;
               height: 3px;
               border-radius: 15px;
               background: black;
           }
    
           span:nth-child(1) {
               transform: rotate(45deg);
           }
           span:nth-child(2) {
               transform: rotate(-45deg);
           }
       }
    
       .container {
           width: 100%;
           height: 100%;
           display: flex;
           flex-direction: row;
    
           border-radius: 10px;
    
           .img_container {
               width: 100%;
               max-width: 400px;
               height: 100%;
               display: flex;
               justify-content: center;
               align-items: center;
               margin: auto;
               overflow: hidden;
    
               img {
                   position: relative;
                   width: 100px;
                   height: 100px;
               }
           }
    
           .content_container {
               width: 100%;
               max-width: 600px;
               height: 100%;
               display: flex;
               flex-direction: column;
               gap: 25px;
    
               .title {
                   max-height: 150px;
                   font-size: 35px;
               }
    
               .content {
                   font-size: 20px;
                   height: 100%;
                   max-height: 400px;
               }
           }
       }
    }
    
    &.display-block { 
        display: block; 
        
    }
    &.display-none { display: none; }
`