function arrayBufferToBase64(buffer) {
  let binary = '';
  let bytes = [].slice.call(new Uint8Array(buffer));
  bytes.forEach((b) => binary += String.fromCharCode(b));
  return window.btoa(binary);
};

function create_src(type,buffer){
  let base64Flag = 'data:image/' + type + ';base64,';
  let base64string = arrayBufferToBase64(buffer);
  let result = base64Flag + base64string;
  return result;
}

const resize = (file) => {
  let reader = new FileReader();
  reader.onload = (e) => {
    let img = document.createElement('img');
    img.onload = () => {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      let width = img.width;
      let height = img.height;
      let max_dimension = 200;
      if(width  > height)
      {
        if(width > max_dimension)
        {
          height *= max_dimension / width;
          width = max_dimension;
        }
      }
      else
      {
        if(height > max_dimension)
        {
          width *= max_dimension/height;
          height = max_dimension;
        }
      }
      canvas.width = width;
      canvas.height = height;

      ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      let extension =  file.name.split('.').pop();
      let type = "image/" + extension;
      let data_url = canvas.toDataURL(type);
      console.log(data_url);
      console.log(create_src("png",test));
      this.setState({src:data_url});
    }   
    img.src = e.target.result;
  }
  reader.readAsDataURL(file);
}

export { arrayBufferToBase64, create_src };