
document.addEventListener('DOMContentLoaded',function(){

   const imageManager = createInterviewManager()
   const savedImages = imageManager.seedImages()
   imageManager.setImages(savedImages)

   imageManager.displayCards(savedImages)

})

function createInterviewManager(){

   let myImages = []

   function seedImages(){
      for (let i = 1; i <= 10; i++) {
         const imageUrl=`https://picsum.photos/300?random=${i}`
         myImages.push(imageUrl);
      }
      console.log(myImages);
      return myImages
   }

   function setImages(images){
      myImages = images
   }

   function displayCards(images){
      const ul = document.createElement('ul')
      ul.classList.add('cards')

      images.forEach((src,index)=>{
         const li = document.createElement('li')
         li.classList.add('cards_item')

         const div_card = document.createElement("div")
         div_card.classList.add('card')
         const div_card_content= document.createElement("div")
         div_card_content.classList.add('card_content')

         const div_card_image = document.createElement("div")
         div_card_image.classList.add("card_image")
         const img = document.createElement("img")
         img.src=src
         img.alt="randomPicsum"

         const btnLeft= document.createElement("btn")
         btnLeft.classList.add('btn')
         btnLeft.textContent="LEFT"
         btnLeft.addEventListener("click",function(){

            const currentIndex = Array.from(ul.children).indexOf(li);

            //edge case
            if(index===0) return
            //swap:
            const leftLi = ul.children[currentIndex - 1];
            const leftDivImage = leftLi.querySelector('.card_image');
            const leftImg = leftDivImage.querySelector('img');

            // remove both images from the DOM
            const currentDivImage = li.querySelector('.card_image');
            const currentImg = currentDivImage.querySelector('img');
            currentDivImage.removeChild(currentImg);
            leftDivImage.removeChild(leftImg);

            // attach back the removed images
            currentDivImage.appendChild(leftImg);
            leftDivImage.appendChild(currentImg);
     })

         const btnRight= document.createElement("btn")
         btnRight.classList.add('btn')
         btnRight.textContent="RIGHT"
         btnRight.addEventListener("click",function(){

            const currentIndex = Array.from(ul.children).indexOf(li);
            
            //edge case
            if(index===9) return
            const rightLi = ul.children[currentIndex + 1];
            const rightDivImage = rightLi.querySelector('.card_image');
            const rightImg = rightDivImage.querySelector('img');

            const currentDivImage = li.querySelector('.card_image');
            const currentImg = currentDivImage.querySelector('img');
            currentDivImage.removeChild(currentImg);
            rightDivImage.removeChild(rightImg);

            currentDivImage.appendChild(rightImg)
            rightDivImage.appendChild(currentImg)

         })

         div_card_image.appendChild(img)

         div_card_content.appendChild(div_card_image)
         div_card_content.appendChild(btnLeft)
         div_card_content.appendChild(btnRight)
         div_card.appendChild(div_card_content)

         li.appendChild(div_card)
         ul.appendChild(li)

      })

      document.body.appendChild(ul)
   }

   return {
      seedImages,
      setImages,
      displayCards
   }

}
