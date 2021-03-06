原文地址：[什么是代理服务器及其工作原理？](https://www.varonis.com/blog/what-is-a-proxy-server/)

人们通常不会停止考虑互联网如何运作的实际细节。随之而来的问题是，可爱的小狗照片，24小时新闻更新和在线交易都伴随着数据安全漏洞和身份盗用的固有危险。

但是，当您浏览网络时实际发生了什么？您可能在办公室的虚拟专用网络（VPN）上使用代理服务器，或者您可能是技术娴熟的人之一，总是使用某种类型的代理服务器。



## 什么是代理服务器？
代理服务器充当您和Internet之间的网关。这是一个中间服务器，可将最终用户与他们浏览的网站分开。代理服务器根据您的用例，需求或公司策略提供不同级别的功能，安全性和隐私。

如果您使用的是代理服务器，则互联网流量会通过代理服务器到达您请求的地址。然后，该请求通过同一台代理服务器返回（此规则有例外），然后代理服务器将从网站接收的数据转发给您。

![什么是代理服务器](https://blogvaronis2.wpengine.com/wp-content/uploads/2018/05/what-is-a-proxy-server.png)

如果仅此而已，为什么还要麻烦代理服务器？为什么不直接进入网站并返回呢？

现代代理服务器的功能远不只是转发Web请求，而仅仅是以数据安全性和网络性能为名。代理服务器充当防火墙和Web筛选器，提供共享的网络连接，并缓存数据以加快常见请求的速度。好的代理服务器可以保护用户和内部网络免受野外Internet上存在的不良影响。最后，代理服务器可以提供高度的隐私。

## 代理服务器如何运行？
Internet上的每台计算机都必须具有唯一的Internet协议（IP）地址。将此IP地址视为计算机的街道地址。就像邮局知道将您的邮件传递到您的街道地址一样，互联网也知道如何通过IP地址将正确的数据发送到正确的计算机。

代理服务器基本上是互联网上的一台计算机，具有您的计算机知道的自己的IP地址。当您发送Web请求时，您的请求将首先转到代理服务器。然后，代理服务器代表您发出Web请求，从Web服务器收集响应，然后将网页数据转发给您，以便您可以在浏览器中查看该页面。

当代理服务器转发您的Web请求时，它可以更改您发送的数据，并仍然为您提供您希望看到的信息。代理服务器可以更改您的IP地址，因此网络服务器无法确切知道您的位置。它可以加密您的数据，因此您的数据在传输中不可读。最后，代理服务器可以根据IP地址阻止对某些网页的访问。

## 为什么要使用代理服务器？
组织和个人使用代理服务器有多种原因。

- 控制员工和孩子对Internet的使用：组织和父母设置了代理服务器，以控制和监视员工或孩子如何使用Internet。大多数组织不希望您在公司时间浏览特定的网站，他们可以将代理服务器配置为拒绝对特定网站的访问，而是用一个很好的注释重定向您，要求您不要在公司网络上查看这些网站。他们还可以监视和记录所有Web请求，因此即使他们可能不会阻止该网站，他们也知道您花了多少时间进行网络游荡。

- 节省带宽和提高速度：好的代理服务器也可以使组织获得更好的整体网络性能。代理服务器可以缓存（在本地保存该网站的副本）受欢迎的网站-因此，当您请求www.varonis.com时，代理服务器将检查其是否具有该网站的最新副本，然后将其发送给您。保存的副本。这意味着当数百人同时从同一代理服务器访问www.varonis.com时，代理服务器仅向varonis.com发送一个请求。这样可以为公司节省带宽并提高网络性能。

- 隐私保护：个人和组织都使用代理服务器来更私密地浏览Internet。某些代理服务器将更改Web请求包含的IP地址和其他标识信息。这意味着目标服务器不知道是谁真正提出了原始请求，这有助于使您的个人信息和浏览习惯更加私密。
改进的安全性：代理服务器除了提供隐私保护外，还提供安全保护。您可以将代理服务器配置为对Web请求进行加密，以防止窥探您的交易。您还可以阻止已知的恶意软件站点通过代理服务器进行任何访问。此外，组织可以将其代理服务器与虚拟专用网络（VPN）耦合，因此远程用户始终可以通过公司代理访问Internet。 VPN是公司提供给外部或远程用户的公司网络的直接连接。通过使用VPN，公司可以控制和验证其用户是否有权访问所需的资源（电子邮件，内部数据），同时还为用户提供安全的连接以保护公司数据。

- 访问被阻止的资源：代理服务器允许用户规避公司或政府施加的内容限制。当地运动队的比赛是否在网络上被涂黑？登录到该国另一端的代理服务器，然后从那里进行观察。代理服务器使它看起来像您在加利福尼亚，但是您实际上居住在北卡罗来纳州。世界各地的几个政府都密切监视并限制对Internet的访问，代理服务器为公民提供未经审查的Internet访问。

![](https://blogvaronis2.wpengine.com/wp-content/uploads/2018/05/why-you-should-use-a-proxy-server.png)

既然您已经了解了组织和个人为何使用代理服务器，那么请看下面的风险。

##代理服务器风险
选择代理服务器时，您确实需要谨慎：一些常见的风险可能会抵消任何潜在的好处：

- 免费代理服务器风险
    - 您知道一句老话：“您能付得起吗？”好吧，使用许多[免费代理服务器服务](https://www.wired.com/2015/07/proxy-services-totally-unsecure-alternatives/)之一可能会带来很大的风险，即使使用ad-基于收入的模型。

    - 免费通常意味着他们不会在后端硬件或加密上投入大量资金。您可能会看到性能问题和潜在的数据安全问题。如果您找到完全“免费”的代理服务器，请非常小心。其中一些只是想窃取您的信用卡号。

- 浏览历史记录
    - 代理服务器的原始IP地址和Web请求信息可能未加密，保存在本地。确保检查您的代理服务器是否记录并保存该数据，以及它们遵循哪种保留或执法合作政策。

    - 如果您希望使用代理服务器来保护隐私，但是供应商只是在记录和出售您的数据，则可能不会收到该服务的期望值。
- 不加密
    - 如果您使用未加密的代理服务器，则最好也不要使用代理服务器。没有加密意味着您将以纯文本形式发送请求。任何正在收听的人都将能够真正轻松地提取用户名，密码和帐户信息。确保您使用的任何代理服务器都提供完整的加密功能。

## 代理服务器的类型
并非所有代理服务器都以相同的方式工作。重要的是要准确了解您从代理服务器获得的功能，并确保代理服务器符合您的用例。

### 透明代理

- 透明的代理告诉网站它是代理服务器，它仍将传递您的IP地址，从而将您标识到Web服务器。企业，公共图书馆和学校经常使用透明代理进行内容过滤：它们很容易在客户端和服务器端进行设置。

### 匿名代理

- 匿名代理将自己标识为代理，但不会将您的IP地址传递给网站-这有助于防止身份盗用并保持浏览习惯的私密性。他们还可以阻止网站根据您的位置向您提供有针对性的营销内容。例如，如果CNN.com知道您居住在北卡罗来纳州罗利市，他们将向您显示与北卡罗来纳州罗利市有关的新闻报道。匿名浏览将阻止网站使用某些广告定位技术，但这并不是100％的保证。

### 扭曲代理

- 扭曲的代理服务器会在为自己识别代理时传递错误的IP地址。这与匿名代理具有相似的用途，但是通过传递错误的IP地址，您似乎看起来是来自其他位置来避开内容限制。

### 高匿名代理

- 高匿名代理服务器会定期更改它们提供给Web服务器的IP地址，因此很难跟踪哪些流量属于谁。高度匿名的代理，例如[TOR Network](https://en.wikipedia.org/wiki/Tor_（anonymity_network）)，是阅读互联网的最私密和安全的方式。

当今，代理服务器已成为有关Net [Neutrality]争议的新闻中的热门话题。（https://www.theverge.com/2018/5/9/17333108/net-neutrality-congressional-review-act-cra-决议投票）和[审查](https://www.washingtonpost.com/world/asia_pacific/the-cat-and-mouse-game-between-chinas-censors-and-internet-activists/2016/06 /14/77f2b3a8-1dd9-11e6-b6e0-c53b7ef63b45_story.html?noredirect=on&utm_term=.422b2c6cafcc)。通过取消美国的网络中立保护，互联网服务提供商（ISP）现在可以控制您的带宽和互联网流量。 ISP可能会告诉您哪些站点可以看到，哪些站点看不到。尽管“网络中立性”将要发生的事情存在很大的不确定性，但代理服务器可能会提供某种能力来解决ISP的限制。

[Varonis分析来自代理服务器的数据](https://www.varonis.com/products/edge/)，以保护您免受数据泄露和网络攻击。代理数据的添加提供了更多上下文，可以更好地分析用户行为趋势是否存在异常。您可以通过可采取行动的情报来警报该可疑活动，以调查和处理该事件。

例如，访问[GDPR数据](https://www.varonis.com/products/gdpr-software/)的用户本身可能并不重要。但是，如果他们[访问GDPR数据](http://solutions.varonis.com/gdpr)，然后尝试将其上传到外部网站，则可能是渗透尝试和潜在的数据泄露行为。没有文件系统监视，代理监视和Varonis威胁模型提供的上下文，您可能会无意识地看到这些事件，而没有意识到需要防止数据泄露。

获取[1：1演示](https://info.varonis.com/request-a-demo)，以查看这些威胁模型的运行情况-并查看您的代理数据可以告诉您什么。