 
// 必须要继承自 EUI.ItemRenderer
class HeroList_item extends eui.ItemRenderer{
    // 选择框
    public ce_select:eui.CheckBox;
​
    public constructor() {
        super()
        // 把这个 类和皮肤 联系起来
        this.skinName = 'resource/eui_skins/skins_item/heroListItem.exml'
    }
        // 当数据改变时，更新视图
    protected dataChanged() {
        // isSeleted 是我们提供数据的某个字段
        this.ce_select.selected = this.data.isSelected;
    }
}