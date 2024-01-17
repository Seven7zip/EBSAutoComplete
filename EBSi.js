function postToEBS(i, lctreSn)
{
    const lessonId = lctreSn.id
    const sbjtapplyId = window.frmStudyPlayer.sbjtapplyId.value
    const sbjtId = window.frmStudyPlayer.sbjtId.value

    // 학습 중용 데이터
    let value = {
        lessonId,
        sbjtapplyId,
        sbjtId,
        clntGbnCd: "C",
        second: "1",
        lecGbn: "V500",
        atndGbnCd: "S",
        ltStdTm: "1",
        status: "0"
    }

    // 학습중으로 변경
    jQuery.ajax(
    {
        type: 'POST',
        async: false,
        url: '/ebs/lms/lmsHist/saveLmsLessonHistDtlAjax.ebs',
        data: value,
        cache: false,
        success: function()
        {
            console.log('Success: ' + i + 'th ID:' + lessonId)
        }
    })

    // 학습 완료용 데이터
    value = {
        lessonId,
        sbjtapplyId,
        eventType: "N"
    }

    // 학습 완료로 변경
    jQuery.ajax(
    {
        type: 'POST',
        async: false,
        url: '/ebs/lms/lmsHist/saveLmsLessonHistCompletedAjax.ebs',
        data: value,
        cache: false,
        success: function()
        {
            console.log('Success: ' + i + 'th ID:' + lessonId)
        }
    })
}

var a = jQuery('tbody.lessonList>tr')
var b = Number(prompt("몇강부터 완료처리할지 입력해주세요(오리엔테이션은 0, 없는 경우 1강이 0)", "0"))
var c = Number(prompt("몇강까지 완료처리할지 입력해주세요", a.length-1))
for (var i = b; i <= c; i++)
{
    postToEBS(i, a[i]);
} 
