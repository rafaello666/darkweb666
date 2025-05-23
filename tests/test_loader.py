from scanner import loader


def test_plugin_loaded():
    """Ensure sample plugin is loaded by the loader."""
    plugins = loader.load_plugins()
    assert "plugin_sample" in plugins
