// javascript
function $$(selector)
{
   const self =
   {
       element: document.querySelector(selector),
       html: ()=> self.element,
       hide: () => self.element.style.display = "none",
       on: (event, callback)=>{ document.addEventListener(event, callback)},
       attr: (name, value)=> {
           if(name == null)
               self.element.getAttribute(name)
           else
               self.element.setAttribute(name, value)
       }
   }
   return self;
}

console.log($$('p').attr('class','dynamic value')); 


