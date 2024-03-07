import styles from '@components/clients/misc/HomeScreen.module.scss';

import * as React from 'react';

import Map from '@system/svg/Map';

function HomeScreen(props) {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <span className={styles.button} style={{ background: 'var(--color-primary)' }}>
            + New Space
          </span>
          <span className={styles.button}>+ New Chat</span>
          <span className={styles.button}>+ Invite a friend</span>
        </div>
        <div className={styles.topRight}>
          <span className={styles.button} style={{ background: 'var(--color-success)' }}>
            Enable Recording
          </span>
          <span className={styles.button}>Space Settings</span>
        </div>
      </div>
      <div className={styles.top}>
        <div className={styles.topLeft}>
          <div className={styles.tab}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>Tab I</div>
            </span>
          </div>
          <div className={styles.tab}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>Tab II</div>
            </span>
          </div>
          <div className={styles.tab}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>Tab III</div>
            </span>
          </div>
          <div className={styles.tab}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>Tab IV</div>
            </span>
          </div>
          <div className={styles.tab}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>Tab V</div>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.middleLeft}>
          <div className={styles.heading}>Spaces</div>

          <div className={styles.item}>
            <Map className={styles.svg} height="16px" />
            <span className={styles.itemRight}>Feel Muddy Team</span>
          </div>

          <div className={styles.presence}>
            <img alt="" className={styles.tinyAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/9ddfd013-0f90-4ac3-8da2-da61edc9b219.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.name}>HQ Han</div>
            </span>
          </div>

          <div className={styles.presence}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>AI Emoji Generator</div>
            </span>
          </div>

          <div className={styles.presence}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>Sora</div>
            </span>
          </div>

          <div className={styles.presence}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>fofr/face-to-sticker</div>
            </span>
          </div>

          <div className={styles.presence}>
            <img alt="" className={styles.tinyAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/992e8d77-b89b-45f8-ab90-c923bac23112.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.name}>Addie Wagenknecht</div>
            </span>
          </div>

          <div className={styles.presence}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>Muddy Brand Assets</div>
            </span>
          </div>

          <div className={styles.presence}>
            <span className={styles.block} />
            <span className={styles.itemRight}>
              <div className={styles.link}>Internet Development Studio</div>
            </span>
          </div>

          <div className={styles.item}>
            <Map className={styles.svg} height="16px" />
            <span className={styles.itemRight}>Super Fun Chat</span>
          </div>

          <div className={styles.item}>
            <Map className={styles.svg} height="16px" />
            <span className={styles.itemRight}>Dogs</span>
          </div>

          <div className={styles.item}>
            <Map className={styles.svg} height="16px" />
            <span className={styles.itemRight}>Interns</span>
          </div>

          <div className={styles.heading}>Chats</div>

          <div className={styles.chat}>
            <img alt="" className={styles.smallAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/9ddfd013-0f90-4ac3-8da2-da61edc9b219.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.name}>HQ Han</div>
              <div className={styles.text}>The price is determined by a VAR signal.</div>
            </span>
          </div>

          <div className={styles.chat}>
            <span className={styles.online} />
            <img alt="" className={styles.smallAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/992e8d77-b89b-45f8-ab90-c923bac23112.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.name}>Addie Wagenknecht</div>
              <div className={styles.text}>Try working harder on the problem?</div>
            </span>
          </div>

          <div className={styles.chat}>
            <span className={styles.online} />
            <img alt="" className={styles.smallAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/8457ff5a-0480-45a9-8c81-feb4c105f440.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.name}>Corinne Bernett</div>
              <div className={styles.text}>I don't know why you think thats the right idea</div>
            </span>
          </div>

          <div className={styles.chat}>
            <img alt="" className={styles.smallAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/d146e5a7-b83d-4599-a19a-4132adfc4a96.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.name}>Andrew Valentine</div>
              <div className={styles.text}>I'm not convinced</div>
            </span>
          </div>

          <div className={styles.chat}>
            <img alt="" className={styles.smallAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c1eec546-23d1-4686-99f7-38f543813a5d.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.name}>Sasha Hudzilin</div>
              <div className={styles.text}>Visit that site... I think you'll like it?</div>
            </span>
          </div>

          <div className={styles.heading}>Notifications</div>

          <div className={styles.notif}>
            <img alt="" className={styles.tinyAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c1eec546-23d1-4686-99f7-38f543813a5d.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.notifDate}>1:12 PM yesterday</div>
              <div className={styles.notifText}>
                <strong>Sasha Hudzilin</strong> accepted your invite.
              </div>
            </span>
          </div>

          <div className={styles.notif}>
            <img alt="" className={styles.tinyAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/c1eec546-23d1-4686-99f7-38f543813a5d.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.notifDate}>3:42 PM yesterday</div>
              <div className={styles.notifText}>
                <strong>Sasha Hudzilin</strong> responded in a thread to you with: "Why would you approach the problem that way?"
              </div>
            </span>
          </div>

          <div className={styles.notif}>
            <img alt="" className={styles.tinyAvatar} src="https://intdev-global.s3.us-west-2.amazonaws.com/public/internet-dev/d146e5a7-b83d-4599-a19a-4132adfc4a96.jpg" />
            <span className={styles.itemRight}>
              <div className={styles.notifDate}>9:42 PM yesterday</div>
              <div className={styles.notifText}>
                <strong>Andrew Valentine</strong> joined your space <strong>Dogs</strong>.
              </div>
            </span>
          </div>
        </div>
        <div className={styles.middleSubLeft}></div>
        <div className={styles.middleInnerSubLeft}></div>
        <div className={styles.remainder}>
          <div className={styles.input} />
        </div>
      </div>
      <div className={styles.bottom}>
        <span className={styles.navigationItem}>
          <strong>Hotkeys:</strong>
        </span>
        <span className={styles.navigationItem}>Home (⌘ + H)</span> <span className={styles.navigationItem}>View Your Settings (⌘ + J)</span>{' '}
        <span className={styles.navigationItem}>View Team (⌘ + T)</span>
        <span className={styles.navigationItem}>Hide Threads (⌘ + D)</span>
        <span className={styles.navigationItem}>Hide Sidebar (⌘ + Y)</span>
      </div>
    </div>
  );
}

export default HomeScreen;
