export interface serverResponse<t>{
  data:t,
  success:boolean,
  message:string
}

export interface productsResponse{
    "id": number,
    "title": string,
    "price": number,
    "image": string,
}
