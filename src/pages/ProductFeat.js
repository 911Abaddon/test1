import React, { useEffect, useRef } from 'react';
import './ProductFeat.css';

const ProductFeat = () => {
  const cardsRef = useRef(null);

  useEffect(() => {
    const cards = cardsRef.current.querySelectorAll('.card');
    const numCards = cards.length;

    cards.forEach((card, index) => {
      const cardContent = card.querySelector('.card__content');

      card.style.setProperty('--index', index + 1);

      cardContent.style.setProperty('--index', index + 1);
      cardContent.style.setProperty('--numcards', numCards);
      cardContent.style.setProperty('--start-range', `${(index / numCards) * 100}%`);
      cardContent.style.setProperty('--end-range', `${((index + 1) / numCards) * 100}%`);
    });
  }, []);

  return (
    <div className='homepage-container'>
      <header>
        <div>
         
        </div>
      </header>
      <main>
        <ul id="cards" ref={cardsRef}>
          <li className="card" id="card_1">
            <div className="card__content">
              <div>
                <h2>Card One</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel feugiat varius, nisi risus pharetra quam, at varius velit sapien id tellus.</p>
                <p>Nullam at elit vel arcu rutrum bibendum. Sed eget sapien sed nisi elementum convallis. Sed venenatis, nisi at scelerisque sollicitudin, quam velit tincidunt nulla, in pulvinar nunc mauris vel ipsum.</p>
              </div>
              <figure>
                <img src="https://via.placeholder.com/400x300" alt="Card One" />
              </figure>
            </div>
          </li>
          <li className="card" id="card_2">
            <div className="card__content">
              <div>
                <h2>Card Two</h2>
                <p>Proin sed nisi ac dolor bibendum euismod. Sed ullamcorper, nunc eget ultrices laoreet, mauris mauris ultrices elit, eget fermentum est nisi in risus.</p>
                <p>Fusce ut arcu vel velit placerat tincidunt. Sed at nulla vel orci posuere varius. Curabitur ut urna non lectus feugiat vehicula.</p>
              </div>
              <figure>
                <img src="https://via.placeholder.com/400x300" alt="Card Two" />
              </figure>
            </div>
          </li>
          {/* Add more card components as needed */}
        </ul>
      </main>
      <aside>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel feugiat varius, nisi risus pharetra quam, at varius velit sapien id tellus. Nullam at elit vel arcu rutrum bibendum. Sed eget sapien sed nisi elementum convallis. Sed venenatis, nisi at scelerisque sollicitudin, quam velit tincidunt nulla, in pulvinar nunc mauris vel ipsum.</p>

        <p>Proin sed nisi ac dolor bibendum euismod. Sed ullamcorper, nunc eget ultrices laoreet, mauris mauris ultrices elit, eget fermentum est nisi in risus. Fusce ut arcu vel velit placerat tincidunt. Sed at nulla vel orci posuere varius. Curabitur ut urna non lectus feugiat vehicula.</p>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor, magna vel feugiat varius, nisi risus pharetra quam, at varius velit sapien id tellus. Nullam at elit vel arcu rutrum bibendum. Sed eget sapien sed nisi elementum convallis. Sed venenatis, nisi at scelerisque sollicitudin, quam velit tincidunt nulla, in pulvinar nunc mauris vel ipsum.</p>

        <p>Proin sed nisi ac dolor bibendum euismod. Sed ullamcorper, nunc eget ultrices laoreet, mauris mauris ultrices elit, eget fermentum est nisi in risus. Fusce ut arcu vel velit placerat tincidunt. Sed at nulla vel orci posuere varius. Curabitur ut urna non lectus feugiat vehicula.</p>
      </aside>
    </div>
  );
};

export default ProductFeat;