import styles from '@demos/DemoDocumentationConceptOne.module.scss';

import * as React from 'react';

const OPTIONS = [
  { id: 2, caption: `Wheel of [HANNAH]'s Fortune`, text: `Ask [JIM] to fetch you one item from [KITCHEN AND MARKET], say "honk".` },
  {
    id: 3,
    caption: '[KEVIN LAVITT]’s Retreat',
    text: 'Reflect quietly, alone at your desk or a public table, for 5 peaceful minutes. Next time [KEVIN LAVITT] is in the office, he is allowed to modify one item on this list.',
  },
  {
    id: 4,
    caption: '[WHY]’s Errand',
    text: '[JIM] shall order one item for you from [WALMART] or [AMAZON], which you must use at least once, and then give to someone else in the office.',
  },
  { id: 5, caption: '[PAUL]’s Wisdom', text: 'Seek serious advice from [PAUL] about something important, write it down, and then ceremoniously burn it in front of [JIM].' },
  {
    id: 6,
    caption: 'Knight Ser [ELIJAH]',
    text: 'Take up a weapon found in the office and perform the knighting ceremony on [ELIJAH]; interrupt if he is occupied. [ELIJAH] is allowed to modify this list how he sees fit.',
  },
  { id: 7, caption: '[ANASTASIYA]’s Blessing', text: 'Adorn someone’s workspace with a note containing a positive affirmation.' },
  { id: 8, caption: '[ALEXIS]’s Tale', text: 'Permanently change one of the options on this list to whatever you desire.' },
  { id: 9, caption: `[GRACE]'s Chariot`, text: 'Take a brisk stroll around the office and the Seattle Aquarium to stretch your legs today, take a photo and share it with [JIM].' },
  { id: 10, caption: `[CHENYU]'s Focused Tower`, text: 'Leave the table immediately and ask [CHENYU] to play music.' },
  { id: 11, caption: '[HAILEY]’s Command', text: 'Politely delegate one quest to [JIM].' },
  { id: 12, caption: '[JAY]’s Grace', text: `Leave a beautiful rock upon [JAY]’s desk.` },
  { id: 13, caption: 'Hanged Man’s Pause', text: 'You are the Janitor tonight; ensure the trash bins are emptied and dishes cleaned.' },
  { id: 14, caption: '[ANDY]’s Radiance', text: 'Offer your coworkers words of encouragement and positive reinforcement to each person you see.' },
  { id: 15, caption: '[MITCHELL]’s Aid', text: 'Request [MITCHELL] to take your photo, interrupting him if busy.' },
  { id: 16, caption: '[MAYA]’s Balance', text: 'Assist someone in the office with a task they find challenging.' },
  { id: 17, caption: '[EMILY]’s Mystery', text: 'Plan an event to occur at the studio within the next month.' },
  { id: 18, caption: '[ANDREWS]’s Call', text: 'Inform [JIM] of what you intend to improve upon today. Change the [NAME] of someone in this list to someone else.' },
  { id: 19, caption: '[IAN WESLEY-SMITH]’s Lesson', text: 'Teach [JIM] about a subject of your choosing.' },
  { id: 20, caption: `[TORI]'s Leadership`, text: 'Help someone in the office gain one additional user for something they are developing.' },
  { id: 21, caption: '[SHARON] Says The Water is Crisp and Clean', text: 'Refresh yourself by drinking water.' },
  { id: 22, caption: `[SAH]'s Ambition`, text: `Deliver a sticker to [JIM]'s desk. Change a name on the list.` },
  { id: 23, caption: 'The Weight of Being an Ace like [ALLAN]', text: 'Perform 5 squats with the kettlebell, then ask someone else to do the same.' },
  { id: 24, caption: '[JUSTICE] is Missing', text: 'Draw a quick doodle of someone in the office, leave it somewhere they will find it.' },
  { id: 25, caption: `[VICTORIA]'s Vibe`, text: 'Bring pleasant flowers into the office. Change the [name] of someone in this list to someone else.' },
  { id: 26, caption: '[BEHZOD]’s Council', text: 'Tell [JIM] something that [BEHZOD] might say on stage.' },
  { id: 27, caption: `[BRENT]'s Honor`, text: 'Assure someone in the office that you have their back. They get to roll the dice twice today.' },
  { id: 28, caption: '[ALEX] is Here', text: 'Give a hearty fist bump to someone in the office. They get to change a name on the list.' },
  { id: 29, caption: `[LEO]'s Painting`, text: 'Present [JIM] with a blank postcard.' },
  { id: 30, caption: `[SARAH]'s Insights`, text: 'Ask someone in the office for their most valuable advice and bring it back to [JIM].' },
  { id: 31, caption: '[ANNA DONG] the Capable', text: 'Ask if someone in the office needs assistance. If you do a task for someone, they get to roll the dice.' },
  { id: 32, caption: `[REED]'s Courtyard Sauna`, text: 'Go have a [GUINESS ZERO] at [KELS] with [JIM].' },
  { id: 33, caption: 'Swinging Swords with [JEFF]', text: 'Reveal to [JIM] the most impressive animation you know.' },
  { id: 34, caption: `[FOSSE]'s Peace`, text: 'Take a tranquil break with [JIM] and listen to [SARAH MCLACHLAN].' },
  { id: 35, caption: 'Converse with [CAIDAN]', text: 'Engage in conversation with [CAIDAN].' },
  { id: 36, caption: `[EMEKA]'s Vision`, text: 'Show [JIM] the most extraordinary piece of apparel you know of.' },
  { id: 37, caption: `[SAI]'s Longevity Mandate`, text: 'Go bring [JIM] a bottled beverage.' },
  { id: 38, caption: `[JAMES]'s Journey of the Grail`, text: 'Secure a Pathfinder bottle for [JIM].' },
  { id: 39, caption: '[HARLEY]’s Envoy', text: `[JIM] will purchase dinner for everyone in the office.` },
  { id: 40, caption: 'Banner Bearer', text: '[JIM] shall gift you a graphic t-shirt of your choosing.' },
];

export default function DemoDocumentationConceptOne(props) {
  return (
    <div className={styles.root}>
      <div className={styles.layout}>
        <div className={styles.heading}>
          <a href="https://wireframes.internet.dev" target="_blank">
            wireframes
          </a>
          <span className={styles.spacer}>/</span>
          <a href="https://internet.dev/office" target="_blank">
            intdev-office
          </a>
          <span className={styles.spacer}>/</span>
          <a href="https://wireframes.internet.dev/examples/components/documentation-1" target="_blank">
            document-example-one
          </a>
        </div>
        <div className={styles.section}>
          <div className={styles.copy}>
            A conventional documentation page implementation, designed in the familiar form of a commit message but serves the same function as a blog post, or a pamphlet. It
            stands as an inquiry into the liminal relationship between the blog post and the commit message. Blog posts and commit messages are often decoupled forms of expression,
            yet the structural similarities are so simple. This document asks not only what distinguishes them, but why such distinctions persist. Does there need to be a
            distinction? And why do these forms resist reconciliation. Is there even a resistance or are we just use to it all?
          </div>
        </div>
        <div className={styles.title}>
          <strong>initial commit: adds office dice roll options at the janitor's desk</strong>
        </div>
        <div className={styles.section}>
          <div className={styles.copy}>
            <div className={styles.row}>
              <span className={styles.left}>author</span>
              <span className={styles.right}>
                jimmylee {'<'}j@internet.dev{'>'}
                <br />
                Wednesday, 4 June 2025 11:11:11 -0700 (Thursday, 5 June 2025 02:11:11 +0800)
              </span>
            </div>

            <div className={styles.row}>
              <span className={styles.left}>committer</span>
              <span className={styles.right}>
                jimmylee {'<'}j@internet.dev{'>'}
                <br />
                Wednesday, 4 June 2025 11:11:11 -0700 (Thursday, 5 June 2025 02:11:11 +0800)
              </span>
            </div>

            <div className={styles.row}>
              <span className={styles.left}>commit</span>
              <span className={styles.right}>fe0158af8d9e9ab07be41e86c80d56dd613b940d</span>
            </div>
            <div className={styles.row}>
              <span className={styles.left}>tree</span>
              <span className={styles.right}>c1ce833269c755397201560577b9598ac02b3c9b</span>
            </div>
            <div className={styles.row}>
              <span className={styles.left}>parent</span>
              <span className={styles.right}>ab82b28651726f2e368f7b41ce27fa3923a495d7</span>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.copy}>
            <div>
              Welcome to the Internet Development Studio Company. Each person here is given one roll of two twenty-sided dice each day. What you roll becomes your directive for the
              day. Following it keeps you in good standing with the janitors. But don’t worry,they are not ones to hold grudges. They forget quickly, as if they understand that we
              are all just doing our best to follow whatever the world throws at us.
            </div>

            <br />

            {OPTIONS.map((each) => {
              return (
                <div className={styles.row} key={each.id}>
                  <span className={styles.left}>{each.id}</span>
                  <span className={styles.right}>
                    {each.caption} - <span style={{ opacity: 0.5 }}>{each.text}</span>
                  </span>
                </div>
              );
            })}

            <br />
            <div style={{ opacity: 0.5 }}>
              Authored-by: jimmylee {'<'}j@internet.dev{'>'}
              <br />
              Signed-off-by: alimbuyuguen {'<'}andy@internet.dev{'>'}
              <br />
              Signed-off-by: apiligrim {'<'}ana@internet.dev{'>'}
              <br />
              Signed-off-by: binaryfiddler {'<'}c@internet.dev{'>'}
              <br />
              Signed-off-by: caidanw {'<'}caidan@internet.dev{'>'}
              <br />
              Signed-off-by: elijaharita {'<'}elijah@internet.dev{'>'}
              <br />
              Signed-off-by: hellohush {'<'}h@internet.dev{'>'}
              <br />
              Signed-off-by: masstronaut {'<'}a@internet.dev{'>'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
