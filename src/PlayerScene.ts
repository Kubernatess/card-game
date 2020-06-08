class PlayerScene extends eui.Component implements  eui.UIComponent {

	private btn_return:eui.Button;
    private btn_equipment:eui.Button;
    private btn_strengthen:eui.Button;
    private scroll_equipment:eui.Scroller;
    private list_equipment:eui.List;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
        // 数组数据
        let dataArr:any[] = [
            {image:"resource/art/profile/skillIcon01.png",name:"旋龙幻杀"},
            {image:"resource/art/profile/skillIcon02.png",name:"魔魂天咒"},
            {image:"resource/art/profile/skillIcon03.png",name:"天魔舞"},
            {image:"resource/art/profile/skillIcon04.png",name:"痴情咒"},
            {image:"resource/art/profile/skillIcon05.png",name:"无间寂"},
            {image:"resource/art/profile/skillIcon06.png",name:"霸天戮杀"},
            {image:"resource/art/profile/skillIcon07.png",name:"灭魂狂飙"}
        ];
        // 把EUI数组作为list的数据源
        this.list_equipment.dataProvider = new eui.ArrayCollection(dataArr);
        // 隐藏进度条
        this.scroll_equipment.horizontalScrollBar.autoVisibility = false;
        // 给返回按钮添加事件
        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);
	}

    /**
     * 回到主场景
     */
    private returnMain() {
        SceneManager.toMainScene();
    }
	
}