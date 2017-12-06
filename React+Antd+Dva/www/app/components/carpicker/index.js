import React from "react";
import classnames from "classnames";
import { connect } from "dva";

 

//引入我们的控件组件
import TabCtrl from "./TabCtrl.js";
import AListCtrl from "./AListCtrl.js";
import RangeCtrl from "./RangeCtrl.js";
import MultipleSelectCtrl from "./MultipleSelectCtrl.js";
import SelectCtrl from "./SelectCtrl.js";
//引入标签组件
import Tags from "./Tags.js";
//引入表格组件
import MyTable from "./MyTable.js";


 
class CarPicker extends React.Component {
    constructor({fetchInit , asyn_init}) {
        super();

        this.state = {
			"brand" : ""
        }
		asyn_init()
        //拉取默认数据
        fetchInit();
        

        //控件的默认数据
		// this.state = {
        //     carbrands: {
		// 		'热门': ['大众', '宝马', '奔驰' , '奥迪' , '丰田', '别克' ,'本田' ,'福特' ,'日产', '路虎', '现代', '沃尔沃', '雪佛兰', '马自达'],
        //         "A": ['奥迪' ,'阿尔法·罗密欧' ,'阿斯顿·马丁' ,'安驰' ,'安凯客车' ,'ALPINA' ,'ARCFOX' ,'AC', 'Schnitzer'],
        //         "B": ['别克', '本田', '宝马', '奔驰', '标致', '比亚迪', '奔腾', '宝骏', '保时捷', '北汽绅宝', '北京', '北汽幻速', '北汽威旺', '北汽制造', '宾利', '宝沃', '巴博斯', '比速汽车', '北汽新能源', '宝龙', '布加迪'],
        //         "C": ["长安", "长城", "长安欧尚", "昌河", "成功汽车"],
        //         "D": ["大众", '宝马', '东南', '东风风神', '道奇', '东风风光', '东风', 'DS', '东风小康', '东风风度', '大宇', '大迪','电咖'],
		// 		"F" : ['丰田', '福特', '菲亚特', '福田', '法拉利', '福迪', '福田乘用车', '福汽启腾', 'Faraday', 'Future',],
		// 		'G' : ['广汽传祺', '广汽吉奥', '观致', 'GMC', '光冈', '国金汽车'],
		// 		"H" : ['哈弗', '海马', '华泰', '黄海', '红旗', '哈飞', '悍马', '华普', '华颂', '航天', '汇众', '华泰新能源', '华骐', '黑豹', '华翔', '华北', '华阳', '恒天', '海格', '华凯'],
		// 		"J" : ['吉利' ,'江淮', 'Jeep', '捷豹', '金杯', '金龙', '江铃', '九龙', '金旅', '江南', '江铃集团新能源', '江铃集团轻汽', '金程'],
		// 		'K' : ['凯迪拉克' ,'克莱斯勒', '开瑞', '凯翼', '卡威', '康迪全球鹰', '卡升', '科尼赛克', '卡尔森', '凯佰赫', 'KTM', '凯马汽车'],
		// 		'L' : ['路虎', '铃木', '雷克萨斯', '陆风', '猎豹汽车', '雷诺', '力帆汽车', '理念', '林肯', '莲花汽车', '拉达', '兰博基尼', '劳斯莱斯', '领克', '路特斯', '陆地方舟', 'LOCAL', 'MOTORS', '罗孚', '劳伦士'],
		// 		'M' : ['马自达', 'MINI', '名爵', '玛莎拉蒂', '迈凯伦', '美亚', '迈巴赫','摩根'],
		// 		'N' : ['纳智捷', '南汽', '南京金龙'],
		// 		'O' : ['讴歌', '欧宝'],
		// 		'P' : ['帕加尼'],
		// 		'Q' : ['起亚', '奇瑞', '启辰', '乔治巴顿'],
		// 		'R' : ['日产', '荣威' ,'瑞麒', '瑞驰新能源','如虎'],
		// 		'S' : ['斯柯达' ,'三菱', '斯巴鲁', 'smart', '思铭', '双龙', '上汽大通', '双环', '萨博', 'SWM斯威汽车', '陕汽通家', '赛麟', '斯达泰克', '赛宝', '世爵', '水星', 'Spirra'],
		// 		'T' : ['特斯拉', '天马', '泰卡特' ,'通宝', '通田', '腾势'],
		// 		'W' : ['五菱汽车', '沃尔沃', '潍柴英致', '威麟', 'WEY', '五十铃', '蔚来', '威马汽车', '威兹曼','王丰'],
		// 		'X' : ['现代','雪佛兰','雪铁龙','西雅特','新凯','鑫源' ,'新大地'],
		// 		'Y' : ['英菲尼迪', '一汽', '驭胜', '野马汽车', '依维柯', '永源', '云度', '御捷', '云豹', '裕路', '宇通客车', '云雀'],
		// 		'Z' : ['众泰', '中华' ,'中兴', '中欧', '中顺', '之诺', '中誉', '知豆']
        //     },
        //     series : {
		// 		// '热门': ['大众', '宝马', '奔驰' , '奥迪' , '丰田', '别克' ,'本田' ,'福特' ,'日产', '路虎', '现代', '沃尔沃', '雪佛兰', '马自达'],
        //         "奥迪" : {
        //             "special": ['A6L', 'A4L', 'Q5', 'A5（进口）', 'TT（进口）', 'Q7（进口）', 'A8（进口）', 'A3', 'Q3', 'A7（进口）'],
        //             "all": {
        //                 "一汽-大众奥迪": ['100', '200', 'A3', 'A4', 'A4L', 'A6', 'A6L', 'Q3' ,'Q5'],
        //                 "奥迪（进口）": ['A1（进口）', 'A3（进口）', 'A4（进口）', 'A5（进口）', 'A6（进口）', 'A7（进口）', 'A8（进口）', 'Q3（进口）', 'Q5（进口）', 'Q7（进口）'],
		// 				"奥迪RS（进口）" : ['RS','3', 'RS','5', 'RS', '6旅行车', 'RS','7', 'TT', 'RS', '奥迪RS', '1（进口）']				
        //             }
		// 		},
		// 		"宝马": {
        //             "special": ['5系', '3系', '7系（进口）', 'X5（进口）' ,'X1', 'X6（进口）' ,'Z4（进口）', '1系（进口）', '3系（进口）', 'X3（进口）'],
        //             "all": {
        //                 "华晨宝马": ['1系' ,'2系', '3系', '5系', 'X1'],
		// 				"宝马（进口）": ['1系（进口）', '2系（进口）', '3系GT（进口）' ,'3系（进口）', '5系GT（进口）'  ,'6系GT（进口）', '6系（进口）', '7系（进口）',  'X3（进口）' ,'X4（进口）', 'X5（进口）',  'Z3（进口）' ,'Z4（进口）'],
		// 				'宝马M（进口）': ['M1', 'M2' ,'M3', 'M4', 'M5' ,'M6' ,'X5M', 'X6M']

        //             }
		// 		},
		// 		"本田": {
        //             "special": ['思域' ,'雅阁'],
        //             "all": {
        //                 "广汽本田": ['冠道', '凌派', '奥德赛', '思迪', '歌诗图', '缤智', '锋范', '雅阁' ,'飞度']
	    //                 }
        //         },
		// 		"长城": {
        //             "special": ['哈佛H6' ,'WEY'],
        //             "all": {
        //                 "长城汽车": ['长城M4' ,'长城C30' ,'长城C50', '长城M2', '风骏', '炫丽' ,'长城C20R']
	    //                 }
        //         },
        //         "奇瑞": {
        //             "special": ["瑞虎", "QQ", "艾瑞泽","E3"],
        //             "all": {
        //                 "奇瑞汽车": ["A1", "A2", "QQ","艾瑞泽"],
        //                 "奇瑞新能源": ["擎天柱","大熊猫"]
        //             }
        //         },
        //         "别克": {
        //             "special": ["威朗", "凯越", "君越","verano","GL8"],
        //             "all": {
        //                 "别克总部": ["英朗", "凯越", "君越", "verano", "GL8"],
        //                 "别克进口车": ["金坷垃", "昂科威"]
        //             }
		// 		},
		// 		"吉利": {
        //             "special": ['帝豪', '博瑞', '远景' ,'帝豪GS' ,'博越' ],
        //             "all": {
        //                 "吉利汽车": ['EC7', 'GC7', 'GX2' ,'GX7' , 'SC7', 'SX7' , '中国龙', '优利欧', '熊猫'],
        //             }
		// 		},
		// 		"马自达": {
        //             "special": ['马自达3' ,'马自达6' ,'CX-5 ' ,'马自达8', '马自达2', '马自达5'],
        //             "all": {
		// 				"长安马自达": ['CX-7', 'CX-4', '睿翼', '阿特兹', '马自达6', '马自达8']
	    //                 }
		// 		},
		// 		"日产": {
        //             "special": ['天籁', '轩逸', '逍客', '阳光', '骐达', '奇骏', '蓝鸟', '骊威', 'GT-R', '途乐'],
		// 		},
		// 		"荣威": {
        //             "special": ['350', '550', 'RX5' ,'360', '750', '950', 'W5'],
		// 		},
		// 		"大众": {
		// 			"special": ['速腾','帕萨特', '迈腾', 'POLO' ,'朗逸', '高尔夫', 'CC'],
		// 			"all": {
		// 				"一汽大众": ['CC', '宝来', '开迪', '捷达', '蔚领', '迈腾', '速腾', '高尔夫'],
		// 				'上汽大众' : ['POLO', '凌渡' ,'帕萨特', '志俊', '朗境', '朗行', '朗逸' ,'桑塔纳']
        //             }
		// 		},
		// 		"江淮": {
        //             "special": ['瑞风S3', '瑞风M5', '瑞风S7', '瑞风M3', '瑞风S2' ,'同悦','瑞风M4' ],
        //             "all": {
		// 				"江淮汽车": ['iEV', 'iEV7S', '凌铃', '合客', '同悦', '和悦', '宾悦', '帅铃T6' ,'征途']
        //             }
		// 		},
        //     },
        //     price : {
        //         "example" : [
        //             {
        //                 "chinese" : "3万以下",
        //                 "b" : 0,
        //                 "t" : 2.99
        //             },
        //             {
        //                 "chinese": "3万~5万",
        //                 "b": 3,
        //                 "t": 5.99
        //             },
        //             {
        //                 "chinese": "6万~8万",
        //                 "b": 6,
        //                 "t": 7.99
        //             },
        //             {
        //                 "chinese": "9万~13万",
        //                 "b": 9,
        //                 "t": 13.99
		// 			},
		// 			{
        //                 "chinese": "14万~17万",
        //                 "b": 14,
        //                 "t": 17.99
		// 			},
		// 			{
        //                 "chinese": "18万~20万",
        //                 "b": 18,
        //                 "t": 20.99
		// 			} ,
		// 			{
        //                 "chinese": "21万~30万",
        //                 "b": 21,
        //                 "t": 30.99
		// 			} ,
		// 			{
        //                 "chinese": "31万~40万",
        //                 "b": 31,
        //                 "t": 40.99
		// 			},
		// 			 {
        //                 "chinese": "41万~50万",
        //                 "b": 41,
        //                 "t": 50.99
		// 			} ,
		// 			{
        //                 "chinese": "50万以上",
        //                 "b": 51,
        //                 "t": 99.99
        //             }
        //         ]
        //         ,
        //         "min" : 0,
        //         "max" : 100
        //     },
        //     "km" : {
        //         "example" : [
        //             {
        //                 "chinese" : "3万以下",
        //                 "b" : 0,
        //                 "t" : 30000
        //             },
        //             {
        //                 "chinese" : "6万以下",
        //                 "b" : 0,
        //                 "t" : 60000
        //             },
        //             {
        //                 "chinese" : "10万以下",
        //                 "b" : 0,
        //                 "t" : 100000
        //             }
        //         ] ,
        //         "min" : 0,
        //         "max" : 1000000
        //     },
        //     "cartype" : {
        //         "title" : "车型",
        //         "options" : ["紧凑型","小型车","中型车","豪华车","小型SUV","中型SUV","大型SUV","越野","面包"]
        //     },
        //     "seat": {
        //         "title" : "座位数",
        //         "options": ["2座","4座","5座","7座","7座以上"]
        //     },
        //     "color": {
        //         "title": "颜色",
        //         "options": ["白色","红色",'橙色','黄色','黑色','银色','绿色','蓝色','棕色','金色']
        //     },
        //     "engine": {
        //         "title": "发动机",
        //         "options": ["1.3","1.5T","1.6T","1.8","2.0","3.0","4.0"]
        //     },
        //     "paifang": {
        //         "title": "排放",
        //         "options": ["国一","国二","国三","国四","国五",]
        //     },
        //     "biansuxiang" : {
        //         "title": "变速箱",
        //         "options": ["手动","自动"]
        //     }
        // }
    }

    //换品牌
    changebrand(brand){
        this.setState({
            brand
        })
    }

    //增加tag
    addtag(tagname,value,words) {
        this.props.addtag(tagname, value, words);
    }

    render() {
		var series = {};
		if(this.props.details[0]){
			var {carbrands,biansuxiang , cartype , color , engine , km , paifang , price , seat } = this.props.details[0];
			series = this.props.details[0].series;
		} 
		// console.log(series);
        return <div>
            <div className="ant-table">
                <div className="ant-table-body">
                    <table>
                        <tbody className="ant-table-tbody">
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    品牌
                                </td>
                                <td>
                                    <TabCtrl 
										data={this.props.details[0] && this.props.details[0].carbrands
										} 
                                        tagname="品牌" 
                                        addtag={this.addtag.bind(this)}
                                        changebrand={this.changebrand.bind(this)}
                                    >
									{
									this.props.details[0] &&this.props.details[0].carbrands	
									}
									</TabCtrl>
                                </td>
                            </tr>
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    车系
                                </td>
                                <td>
									<AListCtrl 
										data={series[this.state.brand]}
										tagname="车系" 
									 	addtag={this.addtag.bind(this)}
									>
									 </AListCtrl>
                                </td>
                            </tr>
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    价格
                                </td>
                                <td>
                                    <RangeCtrl data={price} tagname="价格" addtag={this.addtag.bind(this)}
									value={[0,100]}
									></RangeCtrl>
                                </td>
                            </tr>
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    公里数
                                </td>
                                <td>
                                    <RangeCtrl data={km} tagname="公里数" addtag={this.addtag.bind(this)}
									value={[0,1000000]}
									></RangeCtrl>
                                </td>
                            </tr>
                            <tr className="ant-table-row">
                                <td className="td_h">
                                    其他
                                </td>
                                <td>
                                    <MultipleSelectCtrl 
                                        data={cartype} 
                                        tagname="车型" 
                                        addtag={this.addtag.bind(this)}
                                    ></MultipleSelectCtrl>
                                    {" "}
                                    <MultipleSelectCtrl 
                                        data={seat} 
                                        tagname="座位数"
                                        addtag={this.addtag.bind(this)}
                                     ></MultipleSelectCtrl>
                                    {" "}
                                    <SelectCtrl
                                        data={color}
                                        tagname="颜色"
                                        addtag={this.addtag.bind(this)}
                                    ></SelectCtrl>
                                    {" "}
                                    <MultipleSelectCtrl
                                        data={engine}
                                        tagname="发动机"
                                        addtag={this.addtag.bind(this)}
                                    ></MultipleSelectCtrl>
                                    {" "}
                                    <MultipleSelectCtrl
                                        data={paifang}
                                        tagname="排放"
                                        addtag={this.addtag.bind(this)}
                                    ></MultipleSelectCtrl>
                                      {" "}
                                     <SelectCtrl
                                        data={biansuxiang}
                                        tagname="变速箱"
                                        addtag={this.addtag.bind(this)}
                                    ></SelectCtrl>
                                    {" "}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <br/>
                    <br/>
                    
                    <Tags></Tags>

                    <br />
                    <br />
                </div>
            </div>

            <div className="cl"></div>

            <MyTable 
                changeXuanfu={this.props.changeXuanfu}
                changeChexing={this.props.changeChexing}
            ></MyTable>
        </div>
    }
}

export default connect(
	({carpicker: {details}}) =>({
		details 
	})
     ,
    (dispatch)=>({
        addtag(tagname,value, words){
            dispatch({ "type": "carpicker/addtag", value, tagname, words })
        },
        fetchInit(){
            dispatch({ "type": "carpicker/fetchInit"})
		},
		asyn_init(){
			dispatch({'type' : 'carpicker/asyn_init'});
		}
    })
)(CarPicker);