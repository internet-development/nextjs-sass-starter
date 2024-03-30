import styles from '@system/layouts/demos/DemoPost.module.scss';

import * as React from 'react';

import { H1, H4, P, Text } from '@system/typography';

export default function DemoPost(props) {
  return (
    <div className={styles.root}>
      <div className={styles.byline}>
        <Text>Research</Text>
        <Text>Thursday, January 11th, 2024 — 2:33 AM</Text>
      </div>
      <div className={styles.content}>
        <H1>What Is Appropriate in the Scheme of Things?</H1>
        <div className={styles.row}>
          <div className={styles.left}>
            <img className={styles.avatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/54ce8027-2910-437d-8fe1-37d89deefbd7.jpg" alt={''} />
          </div>
          <div className={styles.right}>
            <Text>
              <strong>Leopold Kohr</strong>
            </Text>
            <Text>Author</Text>
          </div>
        </div>
      </div>
      <div className={styles.center}>
        <div className={styles.border} />
      </div>
      <div className={styles.content}>
        <P>
          The idea of ‘appropriate’ implies the existence of limits. When something is inappropriate, it means it is either too large or too small, too advanced or too retarded,
          too slow or too fast, too rich or too poor. As the prince of advertisers, the late Howard Gossage, used to say when he defined poison as ‘too much’, so also we can say of
          the ‘inappropriate’ that it can be defined quite simply as ‘too much’ — too much in either direction. It is as inappropriate to be too virtuous as it is to be too
          depraved.
        </P>

        <P style={{ marginTop: `1rem` }}>
          Like the Greek idea of harmony, of nothing to excess, the concept of ‘appropriate’ is therefore a relative one. It depends on what it serves. It is measured by its
          ability, not to reach the pole to which the needle of the compass points, but to stay on course once the direction is set. What matters is not truth but whether truth is
          bad or good, whether it builds or whether it destroys. When the Lord proclaimed that there were stars, planets, water and earth, he lied the blue out of the sky because
          nothing of the sort existed before. They became real when he pronounced the Word. And the Word was a Lie. But it was the only thing appropriate for anyone intent on
          creating something out of nothing.
        </P>

        <H4 style={{ marginTop: 64 }}>Relativity</H4>

        <P style={{ marginTop: `1rem` }}>
          The concept thus being a relative one and taking its measure from the thing it serves, the first question we must answer is: Appropriate to what? When speaking of
          technology, the consensus of most is that it refers to high productivity. The greater this is, the more appropriate is the technology required to improve the human lot.
          This is what caused the underdeveloped world to try to catch up with the industrialization of the developed world, and the developed world to push for ever higher levels
          of automated efficiency. Neither has as yet fully grasped that there can be such a thing as overdevelopment; that beyond given limits technological progress not only
          ceases to be a solution in the struggle for social advance but actually becomes the most intractable obstacle to it; and that overdevelopment can bedevil not only the
          developed but also the underdeveloped.
        </P>

        <P style={{ marginTop: `1rem` }}>
          This gives rise to a second question. If the concept of ‘appropriate’ is defined by limits below which there is not enough and above which there is too much, what
          determines the limits? The answer is not too difficult. They are set by the size and shape of a thing which, in turn, are determined by the function a thing has to
          perform. The appropriate size of a tooth depends on its function to make food more readily digestible by breaking it up without hurting in the process the mouth in which
          it is embedded. A larger tooth would not solve the problem of growth but create a more severe problem of form, even though it might now qualify for entry into the Book of
          Records.
        </P>

        <H4 style={{ marginTop: 48 }}>Perspective</H4>

        <P style={{ marginTop: `1rem` }}>
          Similarly, the human body, the shell of a snail, a home, a shirt, a school, a theatre, a parliament building, an airport, have the limits to their size determined by
          their functions. As the Cambridge biologist D’Arcy Thompson has shown in his masterful study On Growth and Form, if a snail were to add a single ring to the sturdy
          structure of its shell once it has reached appropriate size, it would increase the latter’s volume sixteen-fold with the result that the structure, which was meant to
          shelter it, would crush it under its functionless overweight — which may be useful for a collector but hardly for the snail.
        </P>

        <P style={{ marginTop: `1rem` }}>
          And what is true in relation to the size of a shell, a tooth, a theatre or the human body is also true when we apply the concept of ‘appropriate’ to the size of a
          community, a society or the state, as well as to the technology best suited to assist these organizations in the discharge of the functions for the sake of which we have
          created them.
        </P>

        <P style={{ marginTop: `1rem` }}>
          This brings us to a third question which must be answered before we can deal with the question of what is an appropriate technology: What is the function of society which
          given technology is to serve? What are the benefits of a bonded existence within a community which have induced man to sacrifice the freedoms he could have enjoyed by
          living on his own rather than in company? Is it justice and peace? If that is the function of society, it would have been wiser to stay away rather than join it. Is it
          the conquest of the moon which the first astronaut has described as a ‘dirty beach’ (in contrast to the Pope who more poetically saw in it ‘the pale lamp of our dreams’)?
          Is it to unite mankind in a Tower of Babel which, though the Lord destroyed it because he considered it a blasphemous violation of His design, has now been set up in its
          second materialization in the midst of the cocktail bars of Manhattan?
        </P>

        <P style={{ marginTop: `1rem` }}>
          None of these ‘benefits’ would seem worth the price of giving up our individual sovereignty. If we have nonetheless opted for the restrictions of a life in common, we can
          have done so for only one reason: to achieve what Aristotle called the summum bonum, a spiritually and materially better life than the one we could attain by living in
          solitude. And it is this that determines the answer to the question of what is an ‘appropriate’ technology: whether it is most efficient, not in material productivity,
          but in its ability to provide us with the cultural, political, economic and convivial ingredients that make up the summum bonum, the good life.
        </P>

        <H4 style={{ marginTop: 48 }}>Size</H4>

        <P style={{ marginTop: `1rem` }}>
          Here is where the question of size comes into the picture. Whether large or small, the function of every society is to provide the citizen with the summum bonum. But not
          every society can do this in equal measure. For as the snail must carry the burden of the shell, so must the citizen carry on his shoulders the burden of the state if he
          wants to derive any benefit from it. And since these burdens tend to increase geometrically with every arithmetic increase in the size of the state, it follows that
          beyond given limits these burdens multiply faster than the intellectual and material resources of man necessary to catch up with them. Up to these limits we can balance
          the mounting membership costs of growing societies by advancing technology to levels of productivity appropriate for coping with the greater problems of larger societies.
          But once these limits are passed, the social burdens become so vast under the impact of the blinding effect of increasing scale that more must be diverted from personal
          to social use than any further technological improvement is able to add in the commodities needed for communal survival. As a result, one after the other of the
          ingredients of the good life that is available in smaller societies must be curtailed as they become afflicted by cancerous overgrowth.
        </P>

        <img src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/ea57b16e-5946-437a-affc-66cac282fd96.jpg" className={styles.image} alt={''} />

        <P style={{ marginTop: `1rem` }}>
          The first to suffer is the fullness of our cultural life. This is why large populations organized in single states can afford, for example, fewer opera houses than the
          same number living divided into smaller and less costly communities such as the city states of the Renaissance. Next to suffer is the political security we need to enjoy
          the summum bonum. No one in the large cities of size- plagued America ventures any longer to go out for a stroll at night unless he is a terrorist, dead drunk or the Son
          of Sam. And even externally social bigness bears no solace to those afflicted by it, as Saint Augustine suggested when he asked the Ancient Romans: ‘What glory is there
          to the vastness of empire — bright and brittle like glass and forever in fear of breaking.’
        </P>

        <P style={{ marginTop: `1rem` }}>
          Third to fall by the wayside is our material prosperity. Instead of raising our living standards, the super-efficient technology of automation — the only one that is
          appropriate for meeting the voracious communication, transportation, integration and survival requirements of overextended communities — actually pushes them downward, a
          fact which is often hidden under the cover of seeming superabundance. For what it gives us is not more butter on bread but, as the Common Market has shown, more butter on
          butter until it becomes a mountain so large that it can no longer either be dismantled or distributed. Its very abundance creates a problem instead of solving one. And
          the same is true of most other commodities with which progress has showered us, from medical services to cars, refrigerators, houses and even holidays. They are no longer
          luxuries but remedial commodities necessary, not to improve life, but merely to help us to cope with the added difficulties of living on too vast a scale. Like the
          greater supply of aspirin tablets, they no longer measure a rise in our standards of health but an increase in the incidence of headaches which we did not have as long as
          we lived in less nerve-racking smaller societies.
        </P>

        <H4 style={{ marginTop: 64 }}>The Analogy</H4>

        <P style={{ marginTop: `1rem` }}>
          Let me illustrate the inexorable decline of living standards in overgrown societies in spite of their stupendous technological advance by means of an analogy. I know that
          scientists have had their doubts about the value of analogies ever since the disputes between the statistikoi and the analogikoi raged in Ancient Greece. Yet, talking in
          images often clarifies concepts faster than talking in figures which, after all, as the measurements in beauty contests demonstrate, convey images too.
        </P>

        <P style={{ marginTop: `1rem` }}>
          The analogy I have in mind is that of a skyscraper. As it rises, it becomes more splendid with every floor, but above a given height it becomes at the same time
          increasingly less profitable, until it is finally deprived of all economic sense when it reaches the 400th floor. For as architects have calculated, at that height the
          entire structure would have to consist of lifts needed to transport the people who could live in it if the lift space did not deprive the glorious structure of all living
          space. The only employment this kind of building could offer would be to lift boys.
        </P>

        <P style={{ marginTop: `1rem` }}>
          Finally, the last amenity affected by unlimited social growth is the primary and, indeed, founding amenity for the sake of which man has opted for a life in common rather
          than in solitude. This is the companionship for which our nature makes us crave and which only society can satisfy. But as with the other ingredients of the good life, of
          Aristotle’s summum bonum, even the companionship function of society begins to shrivel when populations start spilling over their organic limits. Bursting instead of
          strengthening the form containing them, they now transform natural man into Organization Man, and the convivial crowd into The Lonely Crowd, as the titles of two
          well-known books suggest.
        </P>

        <P style={{ marginTop: `1rem` }}>
          For all this, as with skyscrapers, the society best suited to fulfil its function of providing its members in the highest possible degree with the prosperity, security,
          cultural serenity and conviviality which, in their sum, make up the good life, is not the largest possible society as the contemporary Babylonians fancy with their
          visions of ideological, economic, continental and world states. It is the society that can give us all this with the smallest number of people.
        </P>

        <H4 style={{ marginTop: 48 }}>Multitudes</H4>

        <P style={{ marginTop: `1rem` }}>
          This is not the same as the smallest society. It means a society of limited size, one that takes its measure, not from what the vast potential of technology can achieve,
          but from what the small stature of man can absorb. In antiquity, city states with populations numbering as few as twenty or thirty thousand people proved large enough to
          form some of the most satisfying communities that ever existed. Today, improvements in transport and communication technology has made it possible to extend these limits
          to perhaps twelve or fifteen million. But beyond this, as the shaky position of the contemporary great powers as well as of the size-afflicted underdeveloped world so
          glaringly demonstrates, no further technological improvement can match the geometrically multiplying problems of scale then setting in, and annihilating anything that up
          to that point might have been gained by the economies of scale. They now turn into the Diseconomies of Scale, to mention with your permission the subtitle of my latest
          book. For, to quote Aristotle once more, ‘there is a limit to the size of states as there is to other things, plants, animals, implements; for none of these retain their
          natural power when they are too large or too small, but they either wholly lose their nature, or are spoiled.’ This is why, in spite of being ringed by the most
          glittering circle of economists — many of them of Nobel-Prize calibre — the British Government has proved unable to foresee, forestall or prepare for any of the problems
          besetting it: not strikes, not unemployment, not inflation, not productivity. A handful of street cleaners could have achieved just as much at less cost. It is not for
          nothing that an increasing number begin to see salvation in devolution, the break-up of the United Kingdom into more easily manageable smaller regions, than in the
          preservation of a unity that makes it burst at its seams.
        </P>

        <P style={{ marginTop: `1rem` }}>
          Having now reached some idea of the function-determined concept of ‘appropriate’ political size, we are at last in a position to turn back to the derivative concept of
          ‘appropriate’ technology. Once we realize that not only can the highest living standards also be attained in smaller communities, but that they can only be attained in
          societies of limited size, we can understand why the ‘appropriate’ technology for providing a people with the summum bonum can be very much simpler, cheaper, less
          advanced and, indeed, less efficient than the one that is necessary for those living in ‘skyscraper’ economies.
        </P>

        <P style={{ marginTop: `1rem` }}>
          For as the difficulties of living in great multitudes increases geometrically with every arithmetic increase in the size of our social structure, so they also diminish
          geometrically with every arithmetic reduction of that size. Instead of getting less for more, we now get more for less. Fewer lifts are a sign not of life getting harder,
          but of our apartments having come closer to the ground. Frequently, all that is needed to improve our living standards without increasing our income is to move from a
          large to a small community.
        </P>

        <P style={{ marginTop: `1rem` }}>
          When I lived in the galactic expanse of the metropolitan area of San Juan in Puerto Rico, I had to travel sixty miles every day to reach office, home, friends, shops,
          theatre, recreation facilities and all the other locations in pursuit of an ordinary day’s activities. Only an expensive nerve-, space- and fuel-consuming high-technology
          car enabled me to do this. When I lived in Cambridge, the same activities required a daily spanning of less than three miles which I could handle by means of a
          pedal-driven low-technology bicycle. And now that I live in Aberystwyth, the distances separating my daily activities have shrunk to less than half a mile which I can
          negotiate on foot with a vastly superior efficiency than I could ever achieve with a car.
        </P>

        <P style={{ marginTop: `1rem` }}>
          So the answer to the problems of our time lies not in advancing technology to the point where it becomes appropriate to meeting the stupendous survival requirements of a
          world integrated in monster societies. The answer lies in reducing the monster societies once again to dimensions in which the ‘appropriate’ tools of human improvement
          can be furnished by a less advanced, simpler and cheaper ‘intermediate’ technology.
        </P>

        <P style={{ marginTop: `1rem` }}>
          This does not mean that there is a conflict between the two concepts. It merely means that for smaller societies the appropriate technology is an infinitely less costly
          intermediate technology. Considering their reduced maintenance requirements, this is enough — as I have tried to show with the skyscraper analogy — to provide equally
          high and, indeed, higher living standards than can be achieved in the size-plagued large societies even with the most advanced technology. Moreover, precisely because
          intermediate technology is mechanically less efficient, it is infinitely more efficient in human terms since, in this age of scandalous unemployment, it can achieve the
          highest standard of living only if all hands are employed. Indeed, it is this feature which provides us with the second defining element of the concept of appropriate
          technology. This is that, besides its ability to offer to every member of society the fullness of the summum bonum, it offers to everyone also the dignity of work needed
          to attain it.
        </P>

        <P style={{ marginTop: `1rem` }}>
          But intermediate technology is not only the appropriate technology for maintaining the high living standards of small countries. It is also the appropriate technology for
          speeding up the advance of underdeveloped countries where the disemployment effect of superefficient equipment is such that the only area in which the suddenly emerging
          armies of unemployed can be reabsorbed (lest they turn their energies towards the overthrow of their governments) is the area of either bureaucratic or military service.
          No wonder that their first sign of progress is often a rise not in welfare, but in power measured by armies of dimensions which in some cases are larger than those with
          which Alexander conquered the world. Moreover, since no country can afford both industrialization and militarization at the same time, an inappropriately advanced
          technology leads not only to abject dependence on foreign assistance, but to a commensurate loss of a people’s national identity. Only the lower efficiency and expense of
          an intermediate technology can avert these retarding side-effects of advanced technology. But since intermediate technology cannot produce satisfactory results except on
          the reduced scale of smaller communities, it can perform its function only if the contemporary underdeveloped large-area states are first dissolved into cantonal systems
          of highly autonomous development districts.
        </P>

        <H4 style={{ marginTop: 64 }}>Parting Words</H4>

        <P style={{ marginTop: `1rem` }}>
          Only then will small applications of capital produce measurable results. And only then will wealth accumulate not so much because of high productivity, but because of the
          low cost of maintaining a communal enterprise of moderate size, coupled with reduced dependence on long-distance transport which the nineteenth-century American economist
          Henry Charles Carey so aptly called ‘the heaviest tax on land and labour’. How heavy this has become in a nomadic world that has abandoned self-sufficiency for
          large-scale economic and political integration can be seen from such preposterous sums as the $200 million which has to be spent by the American airlines alone every year
          to protect their passengers from a minuscule number of terrorists whose effectiveness is the more devastating the larger the state which they choose as the target of
          their attack.
        </P>
      </div>
    </div>
  );
}
