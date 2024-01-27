// custom js for product variant
class TestVariant extends HTMLElement {
    constructor(){
        super();
        console.log("this",this);
        this.variantsJson = JSON.parse(this.querySelector('[data-variants-json]').innerHTML);
        this.atcForm = document.querySelector('product-info product-form form');
        this.addEventListener('change', this.onVariantChange);
        this.preventATC();
    }
    onVariantChange() {
        let selections = this.currentSelections();
        this.updatePrice(selections);
        this.updateMedia(selections);
        let atc = this.updateAvailability(selections);
        if(atc){
            this.enableATC();
        }else{
            this.preventATC();
        }
      }
      updatePrice(){
        
      }

      updateMedia(){
        console.log('updating media');
        }

    checkAvailability(){
        console.log('check availability');

    }

    enableATC(){
        console.log('enable atc');
        this.atcForm.querySelectorAll('button').forEach(btn => btn.disabled = false);
    }

    preventATC(){
        console.log("disable atc");
        this.atcForm.querySelectorAll('button').forEach(btn => btn.disabled = true);
    }
    currentSelections(){
      let allData = new FormData(this.atcForm);
      let Unselected = false;
      let returnObj = {};
      let selectedValues = []; 
       allData.forEach((val,key)=>{
        let value = val.toLocaleLowerCase();
        if( value == 'unselected'){
            Unselected = true;
           }
        if(key.includes('option')){
            selectedValues.push(value);
        }
        });
        returnObj.Unselected = Unselected;
        returnObj.selectedValues = selectedValues;
        return returnObj;
    }

}
customElements.define('test-variant', TestVariant);