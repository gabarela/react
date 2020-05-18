import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
//import { settings } from '../../data/dataStore.js'; POTRZEBNE DLA UKRYTEGO CREATORA / ZAKOMENTOWANE BO ESLINT NIE PUSZCZA COMMITA
//import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
 
    static propTypes = {
      title: PropTypes.node,
      icon: PropTypes.string,
      cards: PropTypes.array,
        
    }

    render() {

      const { title, icon, cards } = this.props;

      return (
        <section className={styles.component}>
          <h3 className={styles.title}><span className={styles.icon}><Icon key='' name={icon} /></span>{title}</h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
          {/*
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
            </div>*/}

        </section>
      );
    }
}

export default Column;