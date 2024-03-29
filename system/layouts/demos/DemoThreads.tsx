import styles from '@system/layouts/demos/DemoThreads.module.scss';

import * as Queries from '@common/queries';
import * as React from 'react';
import * as Utilities from '@common/utilities';

import SmallButton from '@system/documents/SmallButton';

const ThreadItem = (props) => {
  const [list, setList] = React.useState<Array<any>>([]);

  const onList = async (options?: Record<string, any>) => {
    const listing = await Queries.userListThreadReplies({ id: props.threadId, orderBy: { column: 'created_at', value: 'desc' } });
    if (!listing || listing.error) {
      props.setModal({
        name: 'ERROR',
        message: 'Something went wrong with listing replies to this post.',
      });
      return;
    }

    if (options && options.checkEmptyArrayError) {
      if (!listing.data.length) {
        props.setModal({
          name: 'ERROR',
          message: 'There are no replies to this thread, make one!',
        });
        return;
      }
    }

    setList(listing.data);
  };

  const onReply = async () => {
    if (!props.viewer) {
      props.setModal({
        name: 'ERROR',
        message: 'You need to sign in first.',
      });
      return;
    }

    const plainText = window.prompt('The easiest way to do this without building the modal. Type what words you want to share.');

    if (Utilities.isEmpty(plainText)) {
      props.setModal({
        name: 'ERROR',
        message: 'You must provide words.',
      });
      return;
    }

    const response = await Queries.userCreatePlainThread({
      key: props.sessionKey,
      fields: {
        thread: true,
        parentId: props.threadId,
        plainText,
      },
      src: null,
      type: 'GENERAL',
    });
    if (!response) {
      props.setModal({
        name: 'ERROR',
        message: 'Something went wrong with creating creating a thread',
      });
      return;
    }

    const listing = await Queries.userListThreadReplies({ id: props.threadId, orderBy: { column: 'created_at', value: 'desc' } });
    if (!listing || listing.error) {
      props.setModal({
        name: 'ERROR',
        message: 'Something went wrong with listing threads',
      });
      return;
    }

    setList(listing.data);
  };

  React.useEffect(() => {
    onList();
  }, []);

  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.top} />
        <div
          className={styles.symbol}
          style={list.length ? { backgroundColor: `var(--color-text)`, color: `var(--color-background)` } : undefined}
          onClick={() => {
            onList({ checkEmptyArrayError: true });
          }}
        >
          {list.length ? `𒆳` : `◈`}
        </div>
        {props.isLast ? null : <figure className={styles.bottom} />}
      </div>
      <div className={styles.right}>
        <div className={styles.children}>{props.children}</div>
        <div className={styles.actions}>
          <SmallButton onClick={onReply}>Reply</SmallButton>
          <SmallButton
            onClick={() => {
              onList({ checkEmptyArrayError: true });
            }}
            style={{ marginLeft: 16 }}
          >
            Get Responses
          </SmallButton>
        </div>
        {list.length ? (
          <div className={styles.replies}>
            {list.map((each, index) => {
              const author = props.viewer && props.viewer.id === each.user_id ? `You` : `Anonymous`;

              return (
                <ThreadItem
                  author={author}
                  isLast={index === list.length - 1}
                  key={each.id}
                  sessionKey={props.sessionKey}
                  setModal={props.setModal}
                  threadId={each.id}
                  viewer={props.viewer}
                >
                  <div className={styles.byline}>
                    {author} ⎯ {Utilities.timeAgo(each.created_at)}
                  </div>
                  <div className={styles.body}>{each.data.plainText}</div>
                </ThreadItem>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default function DemoThreads(props) {
  if (!props.data || !props.data.length) {
    return null;
  }

  return (
    <div className={styles.root} style={props.style}>
      {props.data.map((each, index) => {
        const author = props.viewer && props.viewer.id === each.user_id ? `You` : `Anonymous`;
        return (
          <ThreadItem isLast={index === props.data.length - 1} key={each.id} sessionKey={props.sessionKey} setModal={props.setModal} threadId={each.id} viewer={props.viewer}>
            <div className={styles.byline}>
              {author} ⎯ {Utilities.timeAgo(each.created_at)}
            </div>
            <div className={styles.body}>{each.data.plainText}</div>
          </ThreadItem>
        );
      })}
    </div>
  );
}
