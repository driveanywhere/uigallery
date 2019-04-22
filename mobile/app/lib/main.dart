import 'package:flutter/material.dart';
import 'package:flutter_webview_plugin/flutter_webview_plugin.dart';

void main() => runApp(StudioX());

const String APP_NAME = 'AML Studio';
const THEME_COLOR = const Color(0xFF0063B1);

class StudioX extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: APP_NAME,
      theme: ThemeData(
        primaryColor: THEME_COLOR,
      ),
      home: MyHomePage(title: APP_NAME),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return WebviewScaffold(
      url: 'https://studiox-mobile.azurewebsites.net',
      appBar: new AppBar(
        title: Text(widget.title),
      ),
      withZoom: false,
      withLocalStorage: true,
      hidden: true,
      initialChild: Container(
        color: THEME_COLOR,
        child: const Center(
          child: Text(
            'Loading.....',
            style: TextStyle(color: Colors.white)
          )
        ),
      ),
    );
  }
}
