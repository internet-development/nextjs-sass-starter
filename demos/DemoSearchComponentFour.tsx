import styles from '@demos/DemoSearchComponentFour.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import ActionItem from '@system/documents/ActionItem';
import Audio from '@system/svg/Audio';
import Focus from '@system/svg/Focus';
import Plus from '@system/svg/Plus';
import Globe from '@system/svg/Globe';
import Search from '@system/svg/Search';

export default function DemoSearchComponentFour(props) {
  return (
    <>
      <div className={styles.root}>
        <div className={styles.layout}>
          <div className={styles.container}>
            <input className={styles.input} placeholder="Search web" />
            <span className={styles.absoluteButton}>
              <span className={styles.roundButton}>
                <Audio height="20px" />
              </span>

              <span
                className={styles.roundButton}
                onClick={() => {
                  Utilities.onHandleThemeChange();
                }}
              >
                <Search height="24px" />
              </span>
            </span>
          </div>
          <div className={styles.footer}>
            <ul className={styles.actions}>
              <li className={styles.item}>
                <span className={styles.icon}>
                  <Plus height="20px" />
                </span>
                <span className={styles.words}>Attach</span>
              </li>
              <li className={styles.item}>
                <span className={styles.icon}>
                  <Focus height="20px" />
                </span>
                <span className={styles.words}>Focus on web</span>
              </li>
            </ul>
            <ul className={styles.history}>
              <li className={styles.record}>
                Three weeks ago, you searched for{' '}
                <a href="#" className={styles.link}>
                  “Help me design a perfect cabin”
                </a>{' '}
                We found{' '}
                <a href="#" className={styles.link}>
                  228 relevant results
                </a>
                , and yesterday we've discovered{' '}
                <a href="#" className={styles.link}>
                  6 more
                </a>
                .
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.content}>
            Two years into the Generative AI revolution, research is progressing the field from “thinking fast”—rapid-fire pre-trained responses—to “thinking slow”— reasoning at
            inference time. This evolution is unlocking a new cohort of agentic applications.
          </div>
          <div className={styles.title}>Generative AI’s Act o1</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            Most people have a relatively easy time coming up with their top three priorities. Just ask them. As an exercise I often ask: if you can only do one thing for the rest
            of the year, and nothing else, what would it be and why? People struggle with this question because it use say to be wrong, which is exactly the point. If we are wrong,
            resources are misallocated.
          </div>
          <div className={styles.title}>Frank Slootman</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            In the last half a century, Singapore has gone through truly astonishing transformations. It has now arguably come of age as a First World country, as captured by the
            title of a recent book by the Founding Father of modern Singapore, Mr Lee Kuan Yew. But First World countries are normally taken to have substantial obligations towards
            the less advanced parts of the world.
          </div>
          <div className={styles.title}>Harvard Kennedy School</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            I can tell my father’s stories to my children, and they listen and it’s all good. But he died before any of them were born. They have no stories about my father from
            their own experience with him, and when I am gone there will be no one left to tell my father’s stories. When my children are gone there will be no one left who has
            ever heard my father’s stories, much less someone to tell them anew. And that’s when my father will truly die. The true death – the final death – is the death of your
            stories.
          </div>
          <div className={styles.title}>Remebering The Face Of Your Father</div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.content}>
            Triple-dips are simply an extension of the double-dip transaction, so it is critical to understand the mechanics of the double-dip first. Simply put, a double dip
            transaction is when new financing is provided such that the lender is entitled to receive, at most, two times of their book value of debt provided. How we get to two
            claims comes from two sources: an intercompany loan and a guarantee from a parent/restricted entities.
          </div>
          <div className={styles.title}>Triple Dip Primer and Spirit Analysis</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            The core problem that must be solved is trust and incentive alignment and if anything AI makes these two things harder to achieve. Bureaucracy, the enemy AI supposedly
            solves, is actually just a sort of "proof of work" method of establishing trust with strangers.
          </div>
          <div className={styles.title}>AI will not fix healthcare admin</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            The argument about the existence of God necessarily must be conducted in the absence of evidence that would stand as proof either in a laboratory or a court of law.
            There is no objective or empirical or experimental evidence on either side. The argument, as such, is by definition hopeless—a piece of foolishness and a waste of time.
          </div>
          <div className={styles.title}>God, Science, and Imagination</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            The critics of capitalism misunderstand the role of the market. Only through capitalism can savings and surplus wealth—the foundation of leisure time—be achieved.
            Capitalism provides very powerful incentives to produce an abundance of material goods in less and less time (and thus at lower costs), hence freeing up time to pursue
            other interests.
          </div>
          <div className={styles.title}>Leisure, The Basis of Culture</div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.content}>
            Trying to learn from customer conversations is like excavating a delicate archaeological site. The truth is down there somewhere, but it’s fragile. While each blow with
            your shovel gets you closer to the truth, you’re liable to smash it into a million little pieces if you use too blunt an instrument.
          </div>
          <div className={styles.title}>The Mom Test</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>Persistence and determination alone are omnipotent. Before them, obstacles vanish into thin air and mountains crumble into atoms.</div>
          <div className={styles.title}>The Eternal Pursuit of Unhappyness</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            “Every time you victimized someone,” I said, “you were victimizing yourself. Every act of kindness you’ve done, you’ve done to yourself. Every happy and sad moment ever
            experienced by any human was, or will be, experienced by you.”
          </div>
          <div className={styles.title}>The Egg</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            Both the criteria of plausibility and of scientific value tend to enforce conformity, while the value attached to originality encourages dissent. This internal tension
            is essential in guiding and motivating scientific work. The professional standards of science must impose a framework of discipline and at the same time encourage
            rebellion against it.
          </div>
          <div className={styles.title}>The Republic of Science</div>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.column}>
          <div className={styles.content}>
            With $1 trillion in assets and unrivaled returns, the private equity giant has conquered Wall Street, but its 76-year old founder, Steve Schwarzman, isn’t finished. He
            wants total domination overseas as well— and the firm’s crown prince, Jonathan Gray, has built an ingenious weapon targeting vast amounts of global wealth.
          </div>
          <div className={styles.title}>Blackstone’s $80 Trillion Opportunity</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            Gardens are a mechanism by which we make life bearable. They protect us from the frenzy and tumult unleashed by history. They counter annihilating and anarchic forces.
            Gardens have been with us – or we have been with gardens – forever.
          </div>
          <div className={styles.title}>Gardens: An Essay on the Human Condition</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            Out of the gate our pace was slow. We were directionless. We wandered North and looped around Starbuck Neck, cut through Sheriff's Meadow and popped out onto Planting
            Field Way. While we talked, our feet carried us by force of habit towards Morning Glory Farm, where we picked up the bike path heading West. By the time we got to the
            airport we’d grown tired of pondering the what if’s and began instead to focus on the what for’s.
          </div>
          <div className={styles.title}>Lighthouse to Lighthouse</div>
        </div>
        <div className={styles.column}>
          <div className={styles.content}>
            Taste is a word I’ve been hearing a lot more lately, and I think it’s because we’ve broadened its application from the world of the aesthetic to the world of the
            practical. Taste has historically been reserved for conversation about things like fashion and art. Now, we look for it in our social media feeds, the technology we
            use, the company we keep, and the people we hire.
          </div>
          <div className={styles.title}>Notes on “Taste”</div>
        </div>
      </div>
    </>
  );
}
