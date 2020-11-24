import stripeInstance from "../../../../axios/stripeInstance";
import countries from "i18n-iso-countries";

const createStripe = (dataUser)=>{
    stripeInstance.post('/create/express-account',{
        email: dataUser?.email,
        country: countries.getAlpha2Code(dataUser?.country)
    })
        .then((response)=>{
            console.log(response.data)

            window.location = response.data.url;
        })
        .catch(err=>{
            console.log(err)
        })
}