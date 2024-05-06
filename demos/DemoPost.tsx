import styles from '@demos/DemoPost.module.scss';

import * as React from 'react';

import { H1, H4, P, SubLead, SubText, Title, Text } from '@system/typography';

export default function DemoPost(props) {
  return (
    <div className={styles.root}>
      <div className={styles.byline}>
        <Text>
          Research <span className={styles.softText}>— 4th</span>
        </Text>
        <Text>Thursday, January 11th, 2024 — 2:33 AM</Text>
      </div>
      <div className={styles.content}>
        <H1>
          On Longevity and Shortness of Life <span className={styles.softText}>— 1st</span>
        </H1>
        <div className={styles.row}>
          <div className={styles.right}>
            <Title>
              <strong>
                Aristotle <span className={styles.softText}>— 2nd</span>
              </strong>
            </Title>
            <Text style={{ marginTop: `0.5rem` }}>
              Translated by George Robert Thomson Ross <span className={styles.softText}>— 3rd</span>
            </Text>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.border} />
      </div>
      <div className={styles.content}>
        <P>
          <span className={styles.softText}>5th — </span>The reasons for some animals being long-lived and others short-lived, and, in a word, causes of the length and brevity of
          life call for investigation.
        </P>

        <P style={{ marginTop: `1rem` }}>
          The necessary beginning to our inquiry is a statement of the difficulties about these points. For it is not clear whether in animals and plants universally it is a single
          or diverse cause that makes some to be long-lived, others short-lived. Plants too have in some cases a long life, while in others it lasts but for a year.
        </P>

        <P style={{ marginTop: `1rem` }}>
          Further, in a natural structure are longevity and a sound constitution coincident, or is shortness of life independent of unhealthiness? Perhaps in the case of certain
          maladies a diseased state of the body and shortness of life are interchangeable, while in the case of others ill-health is perfectly compatible with long life.
        </P>

        <P style={{ marginTop: `1rem` }}>
          Of sleep and waking we have already treated; about life and death we shall speak later on, and likewise about health and disease, in so far as it belongs to the science
          of nature to do so. But at present we have to investigate the causes of some creatures being long-lived, and others short-lived. We find this distinction affecting not
          only entire genera opposed as wholes to one another, but applying also to contrasted sets of individuals within the same species. As an instance of the difference
          applying to the genus I give man and horse (for mankind has a longer life than the horse), while within the species there is the difference between man and man; for of
          men also some are long-lived, others short-lived, differing from each other in respect of the different regions in which they dwell. Races inhabiting warm countries have
          longer life, those living in a cold climate live a shorter time. Likewise there are similar differences among individuals occupying the same locality.
        </P>

        <H4 style={{ marginTop: 48 }}>Part II</H4>

        <P style={{ marginTop: `1rem` }}>
          In order to find premisses for our argument, we must answer the question, What is that which, in natural objects, makes them easily destroyed, or the reverse? Since fire
          and water, and whatsoever is akin thereto, do not possess identical powers they are reciprocal causes of generation and decay. Hence it is natural to infer that
          everything else arising from them and composed of them should share in the same nature, in all cases where things are not, like a house, a composite unity formed by the
          synthesis of many things.
        </P>

        <P style={{ marginTop: `1rem` }}>
          In other matters a different account must be given; for in many things their mode of dissolution is something peculiar to themselves, e.g. in knowledge and health and
          disease. These pass away even though the medium in which they are found is not destroyed but continues to exist; for example, take the termination of ignorance, which is
          recollection or learning, while knowledge passes away into forgetfulness, or error. But accidentally the disintegration of a natural object is accompanied by the
          destruction of the non-physical reality; for, when the animal dies, the health or knowledge resident in it passes away too. Hence from these considerations we may draw a
          conclusion about the soul too; for, if the inherence of soul in body is not a matter of nature but like that of knowledge in the soul, there would be another mode of
          dissolution pertaining to it besides that which occurs when the body is destroyed. But since evidently it does not admit of this dual dissolution, the soul must stand in
          a different case in respect of its union with the body.
        </P>

        <H4 style={{ marginTop: 48 }}>Part III</H4>

        <P style={{ marginTop: `1rem` }}>
          Perhaps one might reasonably raise the question whether there is any place where what is corruptible becomes incorruptible, as fire does in the upper regions where it
          meets with no opposite. Opposites destroy each other, and hence accidentally, by their destruction, whatsoever is attributed to them is destroyed. But no opposite in a
          real substance is accidentally destroyed, because real substance is not predicated of any subject. Hence a thing which has no opposite, or which is situated where it has
          no opposite, cannot be destroyed. For what will that be which can destroy it, if destruction comes only through contraries, but no contrary to it exists either absolutely
          or in the particular place where it is? But perhaps this is in one sense true, in another sense not true, for it is impossible that anything containing matter should not
          have in any sense an opposite. Heat and straightness can be present in every part of a thing, but it is impossible that the thing should be nothing but hot or white or
          straight; for, if that were so, attributes would have an independent existence. Hence if, in all cases, whenever the active and the passive exist together, the one acts
          and the other is acted on, it is impossible that no change should occur. Further, this is so if a waste product is an opposite, and waste must always be produced; for
          opposition is always the source of change, and refuse is what remains of the previous opposite. But, after expelling everything of a nature actually opposed, would an
          object in this case also be imperishable? No, it would be destroyed by the environment.
        </P>

        <P style={{ marginTop: `1rem` }}>
          If then that is so, what we have said sufficiently accounts for the change; but, if not, we must assume that something of actually opposite character is in the changing
          object, and refuse is produced.
        </P>

        <P style={{ marginTop: `1rem` }}>
          Hence accidentally a lesser flame is consumed by a greater one, for the nutriment, to wit the smoke, which the former takes a long period to expend, is used up by the big
          flame quickly.
        </P>

        <P style={{ marginTop: `1rem` }}>
          Hence [too] all things are at all times in a state of transition and are coming into being and passing away. The environment acts on them either favourably or
          antagonistically, and, owing to this, things that change their situation become more or less enduring than their nature warrants, but never are they eternal when they
          contain contrary qualities; for their matter is an immediate source of contrariety, so that if it involves locality they show change of situation, if quantity, increase
          and diminution, while if it involves qualitative affection we find alteration of character.
        </P>

        <H4 style={{ marginTop: 64 }}>Part IV</H4>

        <P style={{ marginTop: `1rem` }}>
          We find that a superior immunity from decay attaches neither to the largest animals (the horse has shorter life than man) nor to those that are small (for most insects
          live but for a year). Nor are plants as a whole less liable to perish than animals (many plants are annuals), nor have sanguineous animals the pre-eminence (for the bee
          is longer-lived than certain sanguineous animals). Neither is it the bloodless animals that live longest (for molluscs live only a year, though bloodless), nor
          terrestrial organisms (there are both plants and terrestrial animals of which a single year is the period), nor the occupants of the sea (for there we find the
          crustaceans and the molluscs, which are short-lived).
        </P>

        <P style={{ marginTop: `1rem` }}>
          Speaking generally, the longest-lived things occur among the plants, e.g. the date-palm. Next in order we find them among the sanguineous animals rather than among the
          bloodless, and among those with feet rather than among the denizens of the water. Hence, taking these two characters together, the longest-lived animals fall among
          sanguineous animals which have feet, e.g. man and elephant. As a matter of fact also it is a general rule that the larger live longer than the smaller, for the other
          long-lived animals too happen to be of a large size, as are also those I have mentioned.
        </P>

        <H4 style={{ marginTop: 48 }}>Part V (Partial)</H4>

        <P style={{ marginTop: `1rem` }}>
          The following considerations may enable us to understand the reasons for all these facts. We must remember that an animal is by nature humid and warm, and to live is to
          be of such a constitution, while old age is dry and cold, and so is a corpse. This is plain to observation. But the material constituting the bodies of all things
          consists of the following-the hot and the cold, the dry and the moist. Hence when they age they must become dry, and therefore the fluid in them requires to be not easily
          dried up. Thus we explain why fat things are not liable to decay. The reason is that they contain air; now air relatively to the other elements is fire, and fire never
          becomes corrupted.
        </P>

        <P style={{ marginTop: `1rem` }}>
          Again the humid element in animals must not be small in quantity, for a small quantity is easily dried up. This is why both plants and animals that are large are, as a
          general rule, longer-lived than the rest, as was said before; it is to be expected that the larger should contain more moisture. But it is not merely this that makes them
          longer lived; for the cause is twofold, to wit, the quality as well as the quantity of the fluid. Hence the moisture must be not only great in amount but also warm, in
          order to be neither easily congealed nor easily dried up.
        </P>

        <H4 style={{ marginTop: 64 }}>Part VI (Partial)</H4>

        <P style={{ marginTop: `1rem` }}>
          It is amongst the plants that we find the longest life-more than among the animals, for, in the first place, they are less watery and hence less easily frozen. Further
          they have an oiliness and a viscosity which makes them retain their moisture in a form not easily dried up, even though they are dry and earthy.
        </P>
      </div>
    </div>
  );
}
