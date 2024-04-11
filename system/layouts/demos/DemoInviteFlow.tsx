import styles from '@system/layouts/demos/DemoInviteFlow.module.scss';

import * as React from 'react';

export default function DemoInviteFlow(props) {
  return (
    <div className={styles.root} style={props.style}>
      <div>
        <img className={styles.headerIcon} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/74ce6c3f-4cc2-4b7d-9fee-62226e8cb32f.jpg" />
      </div>
      <div className={styles.team}>
        <input className={styles.teamInput} placeholder="Your Muddy Team" />
        <span className={styles.teamEditSVG}>SVG</span>
      </div>
      <div className={styles.title}>Invited members</div>
      <div className={styles.invited}>
        <div className={styles.invitedLeft}>Avatars</div>
        <div className={styles.invitedRight}>Names</div>
      </div>

      <div className={styles.teamLink}>
        <div className={styles.teamLinkLeft}>
          <input className={styles.teamLinkLeftInput} />
        </div>
        <div className={styles.teamLinkRight}>
          <button className={styles.button}>Copy</button>
        </div>
      </div>

      <div className={styles.priority}>
        <div className={styles.priorityTitle}>Interested in priority access?</div>
        <div className={styles.priorityBody}>
          Get early access by adding your team.
          <br />
          The more complete your team, the sooner you'll get access.
        </div>
        <div className={styles.priorityInput}>
          <input className={styles.priorityInputElement} placeholder="e-mail" />
        </div>
        <div className={styles.priotiyAction}>
          <button className={styles.button}>Invite</button>
        </div>
      </div>
    </div>
  );
}
