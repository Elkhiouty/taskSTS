export class product{
  public id !: string
  public title !: string
  public price !: number
  public image !: string

  constructor(id:string, title:string, image:string, price:number) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.image = image;
  }
}
export class cProduct extends product{
public count !: number;

constructor(id:string, title:string, image:string, price:number, count:number) {
  super(id,title,image,price)
  this.count= count;
}
}

export interface fProduct {
  product:cProduct,
  total:number
}

export interface category {
  id:number,
  title:string
}
