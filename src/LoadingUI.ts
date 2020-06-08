class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        // 当被添加到舞台的时候触发 (被添加到舞台,说明资源组已经加载完成)
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createView, this);
    }

    private textField: egret.TextField; // 文本
    private loadImg: egret.Bitmap; // loading图标

    private createView():void {
        this.width = this.stage.stageWidth;
        this.height = this.stage.stageHeight;
​
        // 背景图
        let bgImg:egret.Bitmap = new egret.Bitmap();
        bgImg.texture = RES.getRes('loading_jpg');
        this.addChild(bgImg);
​
        // loading图标
        this.loadImg = new egret.Bitmap();
        this.loadImg.texture = RES.getRes('loading2_png');
        this.addChild(this.loadImg);
        this.loadImg.anchorOffsetX = this.loadImg.width / 2;
        this.loadImg.anchorOffsetY = this.loadImg.height / 2;
        this.loadImg.x = this.width/2;
        this.loadImg.y = this.height/2;       
​
        // 文本
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = 480;
        this.textField.height = 20;
        this.textField.y = this.height/2 - this.textField.height/2;
        this.textField.size = 24;
        this.textField.textAlign = "center";
​
        // 监听帧事件,每帧都让loading图片转动
        this.addEventListener(egret.Event.ENTER_FRAME, this.update, this);
    }

    // 旋转
    private update() {      
        this.loadImg.rotation += 5;
    }

    // 这个函数在加载中会自动调用
    public onProgress(current:number, total:number):void {
        let per = Math.floor((current/total)*100);
        this.textField.text = `Loading...${per}/%`;
    }
}
