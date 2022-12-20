chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
        text: "On",
    })
    console.log("Installed");
})

const blackboard_due_dates_url = 'https://elearning.utdallas.edu/ultra/calendar'
const blackboard_grades_url = 'https://elearning.utdallas.edu/ultra/grades'

chrome.action.onClicked.addListener(async (tab) => {
    console.log("clicked");
    console.log(tab);
    if (tab.url === blackboard_due_dates_url || tab.url === blackboard_grades_url ) {
        await chrome.scripting.executeScript(
            {
                target: {tabId: tab.id},
                files: ['scripts/content.js']
            }, () => {
                console.log("Finished loading content scripts");
            }
        )
    }else{
        await chrome.scripting.executeScript(
            {
                target: {tabId: tab.id},
                func: invalidTab,
            },() => {
                console.log("Finished invalid tab alert");
            }
        )
    }
})

function invalidTab(){
    alert("Invalid tab please proceed to https://elearning.utdallas.edu/ultra/calendar");
}