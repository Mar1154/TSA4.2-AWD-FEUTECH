const openWin = document.querySelectorAll('.open-popup');
const closeWin = document.querySelector('.close-popup');
const popupDialog = document.querySelector('.pop-up');
const popupTitle = document.getElementById('popupTitle');
const popupBody = document.getElementById('popupBody');

openWin.forEach(button => {
  button.addEventListener('click', () => {
      const popupId = button.dataset.popup;
        switch (popupId) {
            case 'ramen':
                popupTitle.textContent = '拉麺';
                popupBody.innerHTML = `
                    <div class="imgBox">
                        <img src="https://www.masslive.com/resizer/rz0LbbSYIWFxlO-ALAtFUeX4rN4=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/expo.advance.net/img/9912389919/width2048/06b_ramencollage.jpeg">
                    </div>
                    <p>Step into a world of comfort and flavor with our authentic Japanese ramen. Each bowl is a masterpiece, carefully crafted with rich broth, tender noodles, and an array of savory toppings. Whether you prefer the classic richness of tonkotsu, the tanginess of miso, or the fiery heat of spicy ramen, our menu offers a variety of options to satisfy every palate. Join us for a bowl of steaming goodness and experience the true essence of Japanese comfort food.</p>

                `;
                break;
            case 'sushi':
                popupTitle.textContent = '寿司';
                popupBody.innerHTML = `
                    <div class="imgBox">
                        <img src="https://marketplace.canva.com/EAFCHK6A2LM/1/0/1600w/canva-black-and-orange-modern-sushi-photo-collage-qUEUx9yMbck.jpg">
                    </div>
                    <p>Embark on a culinary journey with our exquisite selection of Japanese sushi. Handcrafted by skilled chefs using the freshest ingredients, our sushi showcases the artistry and precision of traditional Japanese cuisine. From delicate nigiri to creative maki rolls, each bite is a symphony of flavors and textures, meticulously balanced to perfection. Whether you're a sushi connoisseur or a curious newcomer, our menu promises an unforgettable dining experience that celebrates the beauty of Japanese gastronomy.</p>

                `;
                break;
            case 'seafood':
                popupTitle.textContent = 'シーフード';
                popupBody.innerHTML = `
                    <div class="imgBox">
                        <img src="https://as2.ftcdn.net/v2/jpg/03/01/76/65/1000_F_301766534_Nd0WoLqus2TVilLcRQL6OMACiJeEgnWu.jpg">
                    </div>
                    <p>Dive into a sea of flavors with our tantalizing seafood offerings. Inspired by the bounty of the ocean, our menu features an array of fresh and flavorful dishes that highlight the best of Japanese seafood cuisine. From succulent sashimi to expertly grilled fish, each dish is a testament to our commitment to quality and taste. Whether you crave the delicate sweetness of scallops, the briny freshness of oysters, or the buttery richness of lobster, our seafood selection promises a culinary adventure that will delight your senses.</p>

                `;
                break;
            case 'liquor':
                popupTitle.textContent = 'お酒';
                popupBody.innerHTML = `
                    <div class="imgBox">
                        <img src="https://images.unsplash.com/photo-1554624158-c0d08d8dc6df?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                    </div>
                    <p>Elevate your dining experience with our curated selection of premium liquors and spirits. From traditional sake to artisanal Japanese whisky, our bar offers a sophisticated array of libations to complement your meal. Sip on a refreshing cocktail crafted with seasonal ingredients, or savor the complexity of aged spirits with a tasting flight. Whether you're in the mood for a classic cocktail or an adventurous new concoction, our knowledgeable staff is here to guide you through our extensive menu and ensure a memorable drinking experience. Cheers to indulgence and sophistication at our Japanese liquor bar.</p>

                `;
                break;
            default:
                break;
        }

        popupDialog.showModal();
    });
});

closeWin.addEventListener('click', () => {
    popupDialog.close();
});