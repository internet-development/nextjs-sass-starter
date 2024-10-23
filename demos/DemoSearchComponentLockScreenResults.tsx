import styles from '@demos/DemoSearchComponentLockScreenResults.module.scss';

import * as React from 'react';
import * as Utilities from '@common/utilities';

import Audio from '@system/svg/Audio';

const IconEmergency = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" {...props} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m5.03125 19.16666667v-1.4375h1.46145833l2.32395833-7.66666667h5.36666667l2.32395833 7.66666667h1.46145833v1.4375h-12.9375zm5.75-11.97916667v-4.3125h1.4375v4.3125zm5.63020833 2.34791667-1.03020833-1.03020833 3.06666667-3.04270833 1.00625 1.00625-3.04270833 3.06666667zm1.31770834 4.6v-1.4375h4.3125v1.4375zm-11.140625-4.6-3.04270834-3.06666667 1.00625-1.00625 3.06666667 3.04270833-1.03020833 1.03020833zm-5.63020834 4.6v-1.4375h4.3125v1.4375z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconResult = (props) => {
  return (
    <svg fill="none" viewBox="-.5 -.5 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m5.390625 21.08333333c-.69878313 0-1.29271021-.24461458-1.78178125-.73384375-.48922917-.48908541-.73384375-1.0830125-.73384375-1.78178125v-3.234375h2.875v-13.41666666h14.375v16.65104167c0 .69876875-.24451875 1.29269583-.73360417 1.78178125-.48922916.48922916-1.08325208.73384374-1.78202083.73384374zm12.21659375-1.4375c.30489375 0 .5612-.10335625.76882292-.31002083s.31145833-.46273125.31145833-.76810417v-15.21354166h-11.5v11.97916667h9.34375v3.234375c0 .30537292.10311667.56143958.30930208.76810417.20618542.20666458.46177292.31002083.76666667.31002083zm-8.98221875-11.97916666v-1.4375h8.625v1.4375zm0 2.875v-1.4375h8.625v1.4375z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconFlashlight = (props) => {
  return (
    <svg fill="none" {...props} viewBox="-.5 -.5 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m5.75 4.69583333v-2.77916666h11.5v2.77916667h-11.5zm5.7456875 10.49375c.33829167 0 .62722917-.11835417.8668125-.3550625.23958333-.23685208.359375-.52435208.359375-.8625 0-.33829167-.11835417-.62722917-.3550625-.8668125-.23685208-.23958333-.52435208-.359375-.8625-.359375-.33829167 0-.62722917.11835417-.8668125.3550625-.23958333.23685208-.359375.52435208-.359375.8625 0 .33829167.11835417.62722917.3550625.8668125.23685208.23958333.52435208.359375.8625.359375zm-3.5894375 5.89375v-10.61354166l-2.15625-3.1625v-1.17395834h11.5v1.17395833l-2.15625 3.1625v10.61354167z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconSearch = (props) => {
  return (
    <svg fill="none" {...props} viewBox="-.5 -.5 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m18.30421458 8.48125 3.1625 3.1625-1.03020833 1.03020833-3.18645833-3.18645833c-.36737708.27154375-.75071042.4671875-1.15.58697917s-.80610208.1796875-1.2204375.1796875c-1.15095833 0-2.13372917-.40527917-2.9483125-1.21588542s-1.221875-1.7948625-1.221875-2.95286458.40527917-2.14227271 1.21588542-2.95286458c.81060624-.81059188 1.79486249-1.21588542 2.95286458-1.21588542 1.15800208 0 2.14225833.40529354 2.95286458 1.21588542s1.21588542 1.7948625 1.21588542 2.95286458c0 .43125-.06789792.85449792-.20364583 1.26979167-.13574792.41529375-.31543542.790625-.5390625 1.12604167zm-3.424125.33541667c.76537292 0 1.411625-.26416458 1.93870833-.79254167.52708333-.52852083.790625-1.17539583.790625-1.940625 0-.76537292-.26416458-1.411625-.79254167-1.93870833-.52852083-.52708333-1.17539583-.790625-1.940625-.790625-.76537292 0-1.411625.26417896-1.93870833.79254167-.52708333.52852083-.790625 1.17539583-.790625 1.940625 0 .76537292.26416458 1.411625.79254167 1.93870833.52852083.52708333 1.17539583.790625 1.940625.790625zm-13.03525 12.26666666v-17.01041666h7.16354167c-.12779375.2875-.215625.575-.26354167.8625s-.071875.59095625-.071875.91041667c0 1.80487708.56699792 3.22239583 1.70104167 4.25260417 1.13404375 1.03020833 2.61946042 1.5453125 4.45625 1.5453125.26799792 0 .53604375-.01087708.80404167-.03258333.26799792-.02189792.54303958-.0589375.825125-.11116667l2.39583333 2.371875v7.21145832h-17.01041667z"
        fill="currentColor"
      />
    </svg>
  );
};

const IconCamera = (props) => {
  return (
    <svg fill="none" {...props} viewBox="-.5 -.5 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m11.5 16.603125c1.15 0 2.11633542-.39133542 2.89895833-1.17395833.78262292-.78262292 1.17395833-1.74895833 1.17395833-2.89895833 0-1.16595625-.39133542-2.13626875-1.17395833-2.9109375-.78262292-.77466875-1.74895833-1.16197917-2.89895833-1.16197917-1.16595625 0-2.13626875.38731042-2.9109375 1.16197917s-1.16197917 1.74498125-1.16197917 2.9109375c0 1.15.38731042 2.11633542 1.16197917 2.89895833.77466875.78262292 1.74498125 1.17395833 2.9109375 1.17395833zm0-1.4375c-.76666667 0-1.39758542-.2515625-1.89270833-.7546875-.49512292-.503125-.74270833-1.13001875-.74270833-1.88072917 0-.76666667.24758542-1.39758542.74270833-1.89270833s1.12604167-.74270833 1.89270833-.74270833c.75071042 0 1.37760417.24758542 1.88072917.74270833.503125.49512292.7546875 1.12604167.7546875 1.89270833 0 .75071042-.2515625 1.37760417-.7546875 1.88072917s-1.13001875.7546875-1.88072917.7546875zm-9.58333333 4.959375v-15.165625h4.959375l1.74895833-2.084375h5.75l1.74895833 2.084375h4.959375v15.165625z"
        fill="currentColor"
      />
    </svg>
  );
};

const SwipeUp = (props) => {
  return (
    <svg fill="none" {...props} viewBox="-.5 -.5 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="m5.41467917 12.81780417c-.75069604-.97428958-1.32170458-2.03645833-1.71302083-3.18645833-.39132104-1.15-.58697917-2.33991458-.58697917-3.56979167 0-.51112708.03194125-1.02220625.09583333-1.53333333.06388729-.51111271.15972063-1.02222542.2875-1.53333333l-1.77291667 1.74895833-.67083333-.67083333 3.01875-3.01875 3.01875 3.01875-.67083333.67083333-1.86875-1.84479167c-.12777938.51110792-.23958333 1.03020833-.33541667 1.55729167-.09583333.52708333-.14375 1.06216875-.14375 1.60520833 0 1.10208333.17169979 2.16822917.51510417 3.1984375.34341875 1.03020833.85052083 1.98456458 1.52135417 2.86302083zm9.05625 7.52291667-7.403125-3.42604167.43125-1.62916667 3.378125-.26354167-3.04270833-8.31354167 1.365625-.52708333 2.61145833 7.21145833 1.509375-.55104167-1.46145833-4.04895833 1.34166667-.47916667 1.46145833 4.04895833 1.48541667-.55104167-1.12604167-3.13854167 1.34166667-.503125 1.15 3.1625 1.509375-.55104167-.503125-1.34166667 1.365625-.52708333 2.99479167 8.3375-8.409375 3.090625z"
        fill="currentColor"
      />
    </svg>
  );
};

export default function DemoSearchComponentLockScreenResults(props) {
  return (
    <div className={styles.root}>
      <div className={styles.top} style={{ paddingTop: 88 }}>
        10-22-2024
      </div>
      <div className={styles.top} style={{ paddingTop: 0 }}>
        11:11 PM
      </div>
      <div className={styles.top} style={{ paddingTop: 0 }}>
        <IconEmergency height="10px" style={{ color: 'var(--theme-error)', marginRight: 8 }} />
        112 notifications
      </div>
      <div className={styles.bottom}>
        <div className={styles.content}>
          <div className={styles.row} style={{ opacity: 0.4 }}>
            <IconFlashlight height="20px" />
          </div>
          <div className={styles.row} style={{ opacity: 0.4 }}>
            <IconCamera height="20px" />
          </div>
          <div className={styles.row}>
            <IconSearch height="20px" /> <input className={styles.input} placeholder="SEARCH THE WEB" defaultValue={`What will keep civilization working?`} />
          </div>
          <div className={styles.description}>
            Your search has been running for 142 minutes while you were away. Here are the best results we found from social graphs, academic sources, the web, and your bookmarked
            data.
          </div>
          <div className={styles.result}>
            <div className={styles.resultLeft}>
              <IconResult height="16px" />
            </div>
            <div className={styles.resultRight}>
              <div style={{ opacity: 0.6 }}>National Geographic</div>
              <div style={{ opacity: 0.6 }}>Key Components of Civilization</div>
              <div>
                Civilization describes a complex way of life characterized by urban areas, shared methods of communication, administrative infrastructure, and division of labor.
              </div>
            </div>
          </div>

          <div className={styles.result}>
            <div className={styles.resultLeft}>
              <IconResult height="16px" />
            </div>
            <div className={styles.resultRight}>
              <div style={{ opacity: 0.6 }}>Paul Vidal de La Blache</div>
              <div style={{ opacity: 0.6 }}>Provinces</div>
              <div>
                We see where the advocates of unification have led us—nowhere. Let us apply the theory of size, then, and see what solutions an opposite approach might offer us.
                Instead of union, let us argue for disunity. Instead of merging the small, let us dismember the large. Instead of creating ever larger and ever fewer states, let us
                create smaller ones. For from all we have seen so far, this seems to be the only way to confine power to dimensions where it cannot produce any significant harm, at
                least as far as its external effects are concerned.
              </div>
            </div>
          </div>

          <div className={styles.result}>
            <div className={styles.resultLeft}>
              <IconResult height="16px" />
            </div>
            <div className={styles.resultRight}>
              <div style={{ opacity: 0.6 }}>Transition Culture</div>
              <div style={{ opacity: 0.6 }}>Exclusive to Transition Culture!</div>
              <div>
                Space itself is somehow being-like, has the potential for beings to appear in it – not in a mechanistic sense of assembly from components, but in the far more
                startling sense of something within space and matter. That something within space and matter could be awoken by the presence of proper configurations.
              </div>
            </div>
          </div>

          <div className={styles.result}>
            <div className={styles.resultLeft}>
              <IconResult height="16px" />
            </div>
            <div className={styles.resultRight}>
              <div style={{ opacity: 0.6 }}>Jeremy Lent</div>
              <div style={{ opacity: 0.6 }}>What Will It Really Take to Avoid Collapse?</div>
              <div>
                Along with their warning, the scientists list a dozen or so examples of the kind of actions that could turn humanity’s trajectory around. These include indisputably
                necessary strategies such as halting the conversion of native habitats into farmland; restoring and rewilding ecologies; phasing out fossil fuel subsidies; and
                promoting dietary shifts toward plant-based foods. With the future of humanity at stake, why aren’t we already doing these things?
              </div>
            </div>
          </div>
          <div className={styles.row} style={{ opacity: 0.4 }}>
            <Audio height="20px" />
          </div>
        </div>
      </div>
      <div className={styles.top} style={{ paddingTop: 0, opacity: 0.4, paddingBottom: 88 }}>
        <SwipeUp height="16px" style={{ marginRight: 8 }} />
        Swipe up to open
      </div>
    </div>
  );
}
