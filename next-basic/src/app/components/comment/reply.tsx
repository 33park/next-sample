interface ReplyItemProps {
    userData: {
        userId:number;
    };
    
    handleReply: () => void;
    hideReplyFn: () => void;
}

const ReplyItemComponent: React.FC<ReplyItemProps> = ({
    handleReply,
    hideReplyFn,
}) => {
    return (
        <ReplyItem key={index}>
            <div>
                <UserIcon href={`/user/${data.reply.userId}`}>
                    <img
                        src={`/images/user/${data.reply.userId}/_profile.jpg`}
                        alt={`${data.reply.userId}`}
                    />
                </UserIcon>
            </div>
            <CommentContentWrap>
                <CommentUserId>
                    <strong>{data.reply.userId}</strong>
                    <span>{data.reply.registDate}</span>
                </CommentUserId>
                <CommentUserContent>{data.reply.registContent}</CommentUserContent>
                <CommentBtnWrap>
                    <div>
                        <button type='button' onClick={handleReply}>
                            답글달기
                        </button>
                        <button type='button' onClick={hideReplyFn}>
                            숨기기
                        </button>
                    </div>
                    <ShowMoreBtn>답글 1개 더보기</ShowMoreBtn>
                    {data.reply.reMentioned && (
                        data.reply.reMentioned.map((reply, idx) => (
                            <ReplyItem key={idx}>
                            {/* reMentioned에 대한 내용 반복 */}
                            </ReplyItem>
                        ))
                    )}
            </CommentBtnWrap>
            </CommentContentWrap>
            <div><Heart/></div>
        </ReplyItem>
    );
};
