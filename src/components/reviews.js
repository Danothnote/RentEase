import { landingStrings } from "../model/landing/landingStrings";

const reviews = document.createElement('div');
const reviewsTitle = document.createElement('h1');
const reviewsContent = document.createElement('div');

reviews.className ='reviews';
reviewsTitle.className = 'reviewsTitle';
reviewsContent.className = 'reviewsContent';

reviewsTitle.textContent = landingStrings.reseñasTitle;

reviews.appendChild(reviewsTitle);

landingStrings.clientes.forEach(cliente => {
    const review = document.createElement('div');
    const avatarContainer = document.createElement('div');
    const avatar = document.createElement('img');
    const name = document.createElement('h3');
    const reviewText = document.createElement('p');
    const starsContainer = document.createElement('div');
    const reviewDate = document.createElement('p');
    const stars = document.createElement('div');

    review.className = 'review';
    avatarContainer.className = 'reviewAvatarContainer';
    avatar.className = 'reviewAvatar';
    name.className = 'reviewName';
    reviewText.className = 'reviewText';
    starsContainer.className = 'reviewStarsContainer';
    reviewDate.className = 'reviewDate';
    stars.className = 'reviewStars';

    avatar.src = cliente.avatar;
    name.textContent = `${cliente.firstName} ${cliente.lastName}`;
    reviewText.textContent = cliente.review;
    reviewDate.textContent = cliente.date;

    starsContainer.appendChild(reviewDate);

    for (let i = 0; i < cliente.stars; i++) {
        const star = document.createElement('img');
        star.src = 'src/assets/star.webp';
        star.alt = 'star';
        stars.appendChild(star);
    }
    starsContainer.appendChild(stars);

    avatarContainer.appendChild(avatar);
    review.appendChild(avatarContainer);
    review.appendChild(name);
    review.appendChild(reviewText);
    review.appendChild(starsContainer);
    reviewsContent.appendChild(review);
});

reviews.appendChild(reviewsContent);

export default reviews;