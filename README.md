#MetaPro
MetaPro is a web-based metabolomics analysis platform characterized by user-friendly batch quality control inspection interface and reliable library curation towards high-resolution mass spectrometry instruments. Using industrial-grade development techniques, we expect MetaPro can elevate the concepts of quality assurance and quality control and in the metabolomics community and normalize the spectra collection operations.The structure of the project has separate front-end and back-end. The folder named MetaPro-Front contains the  resources of the front-end while the  .jar file is the back-end server.

#How to use
To deploy MetaPro on your own personal computer or server in your lab, first you need to confirm `Java`, `MongoDB` and `Nginx` are already properly installed on your computer. Then the following steps need to be conducted.   
1. Step1: Download all the project resources to your local position.
2. Step2: Open MongoDB. How to open MongoDB database on your computer please refer to `www.mongodb.com`
3. Step3: Start the back-end Server. Open the terminal and use the command line.  
   `java -jar -Dspring.config.location=application.properties MetaPro.jar`  
   Please attention: You need to replace the `MetaPro.jar` and `application.properties` with your own file positions. In `application.properties`, you can set user-specific configuration such as mongodb database port, metabolomics file repository and so on. Examples for the main items:
   `spring.data.mongodb.uri=mongodb://localhost:27017/metapro`
   `repository=/Users/Documents/metabolomics`
   `export=/Users/Documents/metabolomics`  
   The repository means where you put your Aird files. The export refers to the position where you want the export to be.
4. Step4: Change Nginx configuration file. Add the following to the nginx.conf.    
`'server{             
   listen 8000;
   server_name   localhost;
   location / {
   root [the path of 'MetaPro-Front' on your computer];
   index index.html;
   try_files $uri $uri/ /index.html;
   }
   }'`
   Then start nginx service, the front-end of MetaPro will be successfully started.
5. Step5. Start using MetaPro on your computer by visiting `localhost:8000`. This is the default settings of MetaPro. You can also change the port by revising configuration files.
