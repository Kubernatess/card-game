class AboutScene extends eui.Component implements eui.UIComponent {
    ​
        private btn_close:eui.Button;
    ​
        public constructor() {
            super();
        }
    ​
        protected partAdded(partName:string,instance:any):void{
            super.partAdded(partName,instance);
        }   ​
    ​
        protected childrenCreated():void{
            super.childrenCreated();
            this.btn_close.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);
        }
    
        private returnMain() {
            SceneManager.toMainScene();
        }
         
    }