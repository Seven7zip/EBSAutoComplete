# EBSAutoComplete
## Script By TriNet / PMH#7086
## Fork by SEVENZIP
### 지원 범위
EBSi

### 스크립트
#### 현재 재생중인 강의 완강처리
```js
function postToEBS(i, lctreSn)
{
    const lessonId = lctreSn
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
            console.log('Success: ' + i + "th ID:" + lessonId)
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
            console.log('Success: ' + i + "th ID:" + lessonId)
        }
    })
}


    postToEBS(1, window.frmStudyPlayer.lessonId.value);

```
#### 범위 지정 완강처리
```js
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
var b = Number(prompt("몇강부터 완료처리할지 입력해주세요(오리엔테이션은 0, 없는 경우 1강이 0)", "1"))
var c = Number(prompt("몇강까지 완료처리할지 입력해주세요", a.length-1))
for (var i = b; i <= c; i++)
{
    postToEBS(i, a[i]);
} 

```
### 사용법
1. EBS 강의 보기 페이지에 접속한다
2. EBS 강의 보기 페이지에서 F12 또는 CTRL + SHIFT + I 를 누른다<br />
2-1. 개발자 도구 탭에서 Console 을 클릭한다.<br />
2-2. 콘솔창에 아래의 코드를 복사 붙여넣기 한다 (CTRL C => CTRL V)<br />
2-3. 엔터키를 누른후 오류가 난다면 Issue 에 오류 내용을 첨부해주고, 완료될때 까지 기다린다 (Success 글씨가 더이상 뜨지 않을 때 까지)<br />
2-4. 완료되었다면 새로고침을 한다.<br />
## 저작권
원작자의 코드에는 MIT 라이선스가 적용됩니다.<br>
이 프로젝트에서의 모든 변경 사항은 GPL3 라이선스가 적용됩니다.
> Copyright (c) PMH (pmhstudio.pmh@gmail.com)<br>
> Copyright (c) SEVENZIP (seven7ziper@gmail.com)
