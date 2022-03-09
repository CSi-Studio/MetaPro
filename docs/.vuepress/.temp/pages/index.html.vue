<template><h1 id="user-manual" tabindex="-1"><a class="header-anchor" href="#user-manual" aria-hidden="true">#</a> <RouterLink to="/guide/user-manual.html">User Manual</RouterLink></h1>
<h2 id="framework" tabindex="-1"><a class="header-anchor" href="#framework" aria-hidden="true">#</a> Framework</h2>
<p><img src="/images/image (1).png" alt=""></p>
<hr>
<h2 id="main-interface" tabindex="-1"><a class="header-anchor" href="#main-interface" aria-hidden="true">#</a> Main Interface</h2>
<p><img src="/images/Figure 1.png" alt=""></p>
<hr>
<h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2>
<p><a href="http://47.88.77.176" target="_blank" rel="noopener noreferrer"><code>http://47.88.77.176</code><ExternalLinkIcon/></a></p>
<hr>
<h2 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h2>
<h3 id="software" tabindex="-1"><a class="header-anchor" href="#software" aria-hidden="true">#</a> Software</h3>
<p><a href="https://github.com/CSi-Studio/AirdPro/releases/tag/1.1" target="_blank" rel="noopener noreferrer">AirdPro v1.1<ExternalLinkIcon/></a></p>
<p><a href="https://github.com/CSi-Studio/MetaPro/releases/tag/v1.1.8" target="_blank" rel="noopener noreferrer">MetaPro v1.1.8<ExternalLinkIcon/></a></p>
<h3 id="test-data-and-libraries" tabindex="-1"><a class="header-anchor" href="#test-data-and-libraries" aria-hidden="true">#</a> Test data and libraries</h3>
<p><a href="https://drive.google.com/drive/folders/1_FAFca5LlqhFWv6U1-UzU9OkqPvGRsBI?usp=sharing" target="_blank" rel="noopener noreferrer">GoogleDrive<ExternalLinkIcon/></a></p>
<p><a href="https://1drv.ms/u/s!AqS3L_kdjWbKgp43W1l8-GteFvv6ZQ?e=xukUkb" target="_blank" rel="noopener noreferrer">OneDrive<ExternalLinkIcon/></a></p>
<hr>
<h2 id="how-to-install" tabindex="-1"><a class="header-anchor" href="#how-to-install" aria-hidden="true">#</a> How to install</h2>
<blockquote>
<p>Extract MetaPro zip file to any directory you want.</p>
</blockquote>
<blockquote>
<p>Here we use INSTALLATION_PATH to represent your installation path, for example <code>C:\</code></p>
</blockquote>
<h3 id="windows" tabindex="-1"><a class="header-anchor" href="#windows" aria-hidden="true">#</a> Windows</h3>
<ul>
<li>
<p>Open INSTALLATION_PATH folder</p>
</li>
<li>
<p><strong>start:</strong> Right click <code>MetaProStart.bat</code>, run as administrator.</p>
<p><strong>Successful operation:</strong></p>
<p>The following operations appear in the terminal to indicate that the operation is successful:
<img src="/images/win.png" alt="">
<strong>After successful startup, open a browser and connect to</strong> <strong><code>localhost:8080</code></strong></p>
</li>
<li>
<p><strong>stop:</strong> Right click <code>MetaProStop.bat</code>, run as administrator</p>
</li>
<li>
<p><strong>uninstall:</strong> Stop MetaPro and delete the installation folder.</p>
</li>
</ul>
<h3 id="macos" tabindex="-1"><a class="header-anchor" href="#macos" aria-hidden="true">#</a> MacOs</h3>
<ul>
<li>
<p>Open a terminal</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd INSTALLATION_PATH
cd MetaproForMac
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>start</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash MetaproStart.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>Successful operation:</strong></p>
<p>The following operations appear in the terminal to indicate that the operation is successful:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">bash</span> ./MetaproStart.sh
/Users/commands/Documents/code/MetaPro/MetaproForMac
********* Start Redis *********
/Users/commands/Documents/code/MetaPro/MetaproForMac/redis
********* Start MongoDB *********
/Users/commands/Documents/code/MetaPro/MetaproForMac/mongodb
********* Start Metapro *********
about to fork child process, waiting <span class="token keyword">until</span> server is ready <span class="token keyword">for</span> connections.
forked process: <span class="token number">94332</span>

$ child process started successfully, parent exiting
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>After successful startup, open a browser and connect to</strong> <strong><code>localhost:8080</code></strong></p>
</li>
<li>
<p>stop</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash MetaproStop.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>uninstall</p>
<p>Stop MetaPro and delete the installation folder.</p>
</li>
</ul>
<h3 id="linux" tabindex="-1"><a class="header-anchor" href="#linux" aria-hidden="true">#</a> Linux</h3>
<ul>
<li>
<p>Open a terminal</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>cd INSTALLATION_PATH
cd MetaproForUbuntu
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li>
<li>
<p>start</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash MetaproStart.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>Successful operation:</strong></p>
<p><strong>After successful startup, open a browser and connect to</strong> <strong><code>localhost:8080</code></strong></p>
<p>The following operations appear in the terminal to indicate that the operation is successful:</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>$ <span class="token function">bash</span> ./MetaproStart.sh
/Users/commands/Documents/code/MetaPro/MetaproForMac
********* Start Redis *********
/Users/commands/Documents/code/MetaPro/MetaproForMac/redis
********* Start MongoDB *********
/Users/commands/Documents/code/MetaPro/MetaproForMac/mongodb
********* Start Metapro *********
about to fork child process, waiting <span class="token keyword">until</span> server is ready <span class="token keyword">for</span> connections.
forked process: <span class="token number">94332</span>

$ child process started successfully, parent exiting
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p><strong>After successful startup, open a browser and connect to</strong> <strong><code>localhost:8080</code></strong></p>
</li>
<li>
<p>stop</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>bash MetaproStop.sh
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li>
<li>
<p>uninstall: Stop MetaPro and delete the installation folder.</p>
</li>
</ul>
<hr>
<h2 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to use</h2>
<p><RouterLink to="/guide/user-manual.html">UserMantal</RouterLink></p>
</template>
