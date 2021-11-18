function getInputValue() {
    //var saveData = "성공적으로 저장 되었습니다. 내용 : " + document.getElementById('inputValue').value;
    //document.getElementById('result').textContent = document.getElementById('result').innerText + "<br>" + saveData;
    var al = document.getElementById('al');
    al.innerText = '저장된 내용 다운로드';
    var blob = new Blob([document.getElementById('inputValue').value], {type: "text/plain"})
    al.href = URL.createObjectURL(blob);
    al.setAttribute("download", "result.txt");
    alert("성공적으로 저장 되었습니다.");
}