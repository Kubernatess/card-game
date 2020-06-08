class HeroScene extends eui.Component implements eui.UIComponent {
​
    private btn_return:eui.Button;
    private btn_confirm:eui.Button;
    private scroll_hero:eui.Scroller;
    private list_hero:eui.List;
​
    public constructor() {
        super();
    }
​
    protected partAdded(partName:string,instance:any):void
    {
        super.partAdded(partName,instance);
    }
​
​
    protected childrenCreated():void
    {
        super.childrenCreated();
​
        // 原始数组
        let dataArr:any[] = [
            {image: 'resource/art/heros_goods/heros01.png', name: '卡特琳娜', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros02.png', name: '符文法师', value: '评价: 很特么厉害, 为所欲为', isSelected: true},
            {image: 'resource/art/heros_goods/heros03.png', name: '正义天使', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros04.png', name: '炼金术师', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros05.png', name: '武器大师', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros06.png', name: '永恒魔魇', value: '评价: 很特么厉害, 为所欲为', isSelected: false},
            {image: 'resource/art/heros_goods/heros07.png', name: '赏金猎人', value: '评价: 很特么厉害, 为所欲为', isSelected: false}
        ]
        // 把list_hero数据源设置成EUIArr
        this.list_hero.dataProvider = new eui.ArrayCollection(dataArr);
        // 设置list_hero的项呈视器 (这里直接写类名,而不是写实例)
        this.list_hero.itemRenderer = HeroList_item;

        this.btn_return.addEventListener(egret.TouchEvent.TOUCH_TAP, this.returnMain, this);
    }

    private returnMain() {
        SceneManager.toMainScene();
    }
     
}