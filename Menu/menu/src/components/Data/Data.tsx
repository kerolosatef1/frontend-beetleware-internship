import image1 from '../images/download.jpg';
import image2 from '../images/download (1).jpg';
import image3 from '../images/download (2).jpg';
import image4 from '../images/bigmac.jpg';
import image5 from '../images/بيض بالجبنة.jpg';
import image6 from '../images/download (3).jpg';
import image7 from '../images/مكر.jpg';
import image8 from '../images/شطيرة.jpg';
import image9 from '../images/download (4).jpg';
import image10 from '../images/بيتز.jpg';
import image11 from '../images/download (5).jpg';
import image12 from '../images/download (6).jpg';
import image13 from '../images/download (11).jpg';
import image14 from '../images/كبسة.jpg';
import image15 from '../images/download (8).jpg';
import image16 from '../images/download (9).jpg';
import image17 from '../images/download (10).jpg';
import image18 from '../images/فطيرة بالجبنة.jpg';
import image19 from '../images/وافل بالشيكولاته.jpg';
import image20 from '../images/ساند كباب.jpg';
import image21 from '../images/مكرونة بالجمبري.jpg';
import image22 from '../images/download (7).jpg';
import image23 from '../images/كباب حلبي.jpg';
import image24 from '../images/تشيز كيك.jpg';


export interface Food {
  id: number;
  name: string;
  type: 'فطار' | 'غداء' | 'عشاء';
  description: string[];
  image: string;
  price: number;
}

export const foods: Food[] = [
  { id: 1, name: 'فول بالزيت', type: 'فطار', description: ['فول', 'زيت زيتون', 'ملح', 'طماطم'], image: image1, price: 30 },
  { id: 2, name: 'بيض بالجبنة', type: 'فطار', description: ['بيض', 'جبنة', 'زيت زيتون', 'ملح', 'فلفل'], image: image5, price: 25 },
  { id: 3, name: 'بان كيك بالعسل', type: 'فطار', description: ['طحين', 'بيض', 'حليب', 'عسل', 'زبدة'], image: image6, price: 40 },
  { id: 4, name: 'شوربة العدس', type: 'غداء', description: ['عدس', 'بصل', 'جزر', 'كرفس', 'ملح', 'بهارات'], image: image2, price: 30 },
  { id: 5, name: 'مكرونة بالصلصة', type: 'غداء', description: ['مكرونة', 'صلصة طماطم', 'جبنة', 'ريحان', 'ملح'], image: image7, price: 50 },
  { id: 6, name: 'بورجر', type: 'غداء', description: ['خس', 'جبنة', 'خبز برجر', 'زيت زيتون', 'لحم مفروم'], image: image4, price: 150 },
  { id: 7, name: 'شطيرة دجاج', type: 'غداء', description: ['خبز', 'دجاج مشوي', 'خس', 'مايونيز', 'طماطم'], image: image8, price: 80 },
  { id: 8, name: 'سمك مشوي', type: 'عشاء', description: ['سمك', 'ليمون', 'ملح', 'فلفل', 'زيت زيتون'], image: image9, price: 120 },
  { id: 9, name: 'سلطة خضار', type: 'عشاء', description: ['خس', 'خيار', 'طماطم', 'زيت زيتون', 'ليمون'], image: image3, price: 30 },
  { id: 10, name: 'بيتزا خضار', type: 'عشاء', description: ['عجينة بيتزا', 'صلصة طماطم', 'جبنة', 'فلفل', 'زيتون'], image: image10, price: 100 },
  { id: 11, name: 'كريب بالموز', type: 'فطار', description: ['طحين', 'بيض', 'حليب', 'موز', 'عسل'], image: image11, price: 35 },
  { id: 12, name: 'عجة خضار', type: 'فطار', description: ['بيض', 'طماطم', 'فلفل', 'بصل', 'ملح'], image: image12, price: 28 },
  { id: 13, name: 'سمبوسة جبنة', type: 'غداء', description: ['عجينة', 'جبنة', 'بهارات'], image: image13, price: 20 },
  { id: 14, name: 'كبسة دجاج', type: 'غداء', description: ['أرز', 'دجاج', 'بهارات', 'بصل', 'طماطم'], image: image14, price: 90 },
  { id: 15, name: 'برجر جبنة', type: 'غداء', description: ['لحم مفروم', 'جبنة', 'خبز', 'خس', 'مايونيز'], image: image4, price: 140 },
  { id: 16, name: 'شوربة خضار', type: 'عشاء', description: ['جزر', 'كرفس', 'بطاطس', 'ملح', 'بهارات'], image: image15, price: 40 },
  { id: 17, name: 'لحم مشوي', type: 'عشاء', description: ['لحم', 'ملح', 'فلفل', 'ثوم', 'زيت زيتون'], image: image16, price: 200 },
  { id: 18, name: 'سلطة تونة', type: 'عشاء', description: ['تونة', 'خس', 'طماطم', 'زيت زيتون', 'ليمون'], image: image17, price: 60 },
  { id: 19, name: 'فطيرة الجبن', type: 'فطار', description: ['عجينة', 'جبنة', 'بيض', 'زيت'], image: image18, price: 25 },
  { id: 20, name: 'وافل بالشوكولاتة', type: 'فطار', description: ['طحين', 'بيض', 'حليب', 'شوكولاتة', 'زبدة'], image: image19, price: 45 },
  { id: 21, name: 'ساندويش كباب', type: 'غداء', description: ['خبز', 'كباب', 'خس', 'طماطم', 'صلصة'], image: image20, price: 100 },
  { id: 22, name: 'معكرونة بالجمبري', type: 'غداء', description: ['مكرونة', 'جمبري', 'صلصة', 'ثوم', 'ملح'], image: image21, price: 120 },
  { id: 23, name: 'فطائر سبانخ', type: 'عشاء', description: ['عجينة', 'سبانخ', 'جبنة', 'ملح'], image: image22, price: 35 },
  { id: 24, name: 'كباب حلبي', type: 'عشاء', description: ['لحم', 'بصل', 'بهارات', 'زيت'], image: image23, price: 150 },
  { id: 25, name: 'تشيز كيك', type: 'عشاء', description: ['جبنة كريمية', 'بسكويت', 'زبدة', 'سكر'], image: image24, price: 80 },
];
