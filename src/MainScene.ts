class MainScene extends eui.Component implements eui.UIComponent {

	private Group_mbtn:eui.Group;
    private mgtnPlayer:eui.ToggleButton;
    private mbtnHero:eui.ToggleButton;
    private mbtnGoods:eui.ToggleButton;
    private mbtnAbout:eui.ToggleButton;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void{
        super.childrenCreated();
		// 让Group可以点击
        this.Group_mbtn.touchEnabled = true;      
        // 事件委托, 点击按钮的时候触发toggleBtn
        this.Group_mbtn.addEventListener(egret.TouchEvent.TOUCH_TAP, (e)=> {
            let theBtn = <eui.ToggleButton>e.target;
            // 如果按钮变为按下状态,也就是第一次点这个按钮的时候,需要把其他的按钮样式取消掉
            if(theBtn.selected) {
                this.toggleBtn(theBtn);
            }
            theBtn.selected = true;
        }, this);
	}

    public toggleBtn(btn:eui.ToggleButton | number) {
        // 先把所有的按钮都设置为不选中
        for (let i = 0; i < this.Group_mbtn.numChildren; i++) {
            let theBtn = <eui.ToggleButton>this.Group_mbtn.getChildAt(i);
            theBtn.selected = false;
        }
        if(btn===0){
            return;
        }
        // 获取当前点击的按钮的下标, 用来实现不同按钮对应的功能
        // 0 1 2 3 对应 玩家, 英雄, 物品, 关于
        let index = this.Group_mbtn.getChildIndex(<eui.ToggleButton>btn);
        switch (index) {
            case 0:
                // 调用静态方法切换到玩家场景
                SceneManager.toPlayerScene();               
                break;
            case 1:
                SceneManager.toHeroScene();
                break;
            case 2:
                SceneManager.toGoodsScene();
                break;
            case 3:
                SceneManager.toAboutScene();
                break;
            default:
                break;
        }
        // 把按钮的层级提高
        this.setChildIndex(this.Group_mbtn,this.numChildren);
    }

	
}